import { ApplicationRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

export class ChannelEvent {
  channel: string;
  event: string;
  data: any;

  constructor(channel: string, event: string, data: any) {
    this.channel = channel;
    this.event = event;
    this.data = data;
  }
}

export class ChannelResponse {
  id: number;
  status: boolean;
  data: any;

  constructor(id: number, status: boolean, data: any) {
    this.id = id;
    this.status = status;
    this.data = data;
  }
}

class ChannelEntry {
  public join: Promise<any>;
  public joined = false;
  public leave?: Promise<any>;
}

@Injectable()
export class WebsocketService {
  private socket: WebSocket;
  private connectionAttempts = 0;
  private requestCounter = 0;
  private eventBus: Subject<ChannelEvent> = new Subject<ChannelEvent>();
  private responseEventBus: Subject<ChannelResponse> = new Subject<ChannelResponse>();
  private channels: {
    [propName: string]: ChannelEntry
  } = {};
  private pushQueue: string[] = [];

  constructor(private app: ApplicationRef) {
  }

  public internalConnect(callback: () => void) {
    this.connectionAttempts++;
    this.socket = new WebSocket('ws://' + document.location.hostname + ':9999/');

    this.socket.onopen = () => {
      this.connectionAttempts = 0;
      this.app.tick();
      this.rejoin().then(() => {
        this.flushQueue();
      });
      callback();
      console.log('Соединение установлено.');
    };

    this.socket.onclose = (event) => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения');
      }
      console.log(`Код: ${event.code} причина: ${event.reason}`);
      setTimeout(() => {
        this.internalConnect(() => {});
      }, Math.max(1000 * this.connectionAttempts, 5000));
      this.app.tick();
    };

    this.socket.onmessage = (event) => {
      try {
        const message: any = JSON.parse(event.data);
        if (message.event === 'response') {
          this.responseEventBus.next(new ChannelResponse(
            message.id,
            message.status,
            message.data,
          ));
        } else {
          this.eventBus.next(new ChannelEvent(
            message.channel,
            message.event,
            message.data,
          ));
        }
      } catch (e) {
        console.error(e);
      }
      this.app.tick();
    };

    this.socket.onerror = (error: any) => {
      console.log(`Ошибка ${error.message}`);
      this.app.tick();
    };
  }

  public connect(timeout = 5000): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject({error: 'timeout of connection'});
      }, timeout);

      this.internalConnect(() => {
        clearInterval(timeoutId);
        resolve(null);
      });
    });
  }

  public push<T>(channel: string, event: string, data: any = {}, timeout = 5000): Promise<T> {
    this.requestCounter++;
    const id = this.requestCounter;
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
          reject({error: `timeout push ${channel}:${event}`});
      }, timeout);

      const subscription = this.responseEventBus.asObservable()
        .filter(e => e.id === id)
        .subscribe((response: ChannelResponse) => {
          clearTimeout(timeoutId);
          subscription.unsubscribe();
          if (response.status) {
            return resolve(response.data);
          } else {
            return reject(response.data);
          }
        });

      const message = JSON.stringify({
        id: id,
        channel: channel,
        event: event,
        data: data,
      });

      if (!this.isConnected()) {
        return this.pushQueue.push(message);
      } else {
        this.socket.send(message);
      }
    });
  }

  // noinspection JSUnusedGlobalSymbols
  public disconnect() {
    if (this.isConnected()) {
      this.socket.close();
      this.connectionAttempts = 0;
      this.pushQueue = [];
      this.channels = {};
    }
  }

  public isConnected(): boolean {
    return this.socket && this.socket.readyState === 1;
  }

  public join(channelName: string): Promise<any> {
    if (this.channels[channelName] && this.channels[channelName].leave) {
      return this.channels[channelName].leave.then(() => {
        return this.join(channelName);
      });
    }

    if (!this.channels[channelName] || !this.channels[channelName].join) {
      const entry = new ChannelEntry();
      this.channels[channelName] = entry;
      this.channels[channelName].join = this.push(channelName, 'join').then(() => {
        entry.joined = true;
      });
    }

    return this.channels[channelName].join;
  }

  public leave(channelName: string): Promise<any> {
    if (this.channels[channelName] && this.channels[channelName].join && !this.channels[channelName].joined) {
      return this.channels[channelName].join.then(() => {
        return this.leave(channelName);
      });
    }

    if (!this.channels[channelName] && !this.channels[channelName].leave) {
      this.channels[channelName].leave = this.push(channelName, 'leave').then(() => {
        this.channels[channelName] = null;
      });
    }

    return this.channels[channelName].leave;
  }

  public on<T>(channel: string, event: string): Observable<T> {
    return this.eventBus.asObservable()
      .filter(e => e.channel === channel)
      .filter(e => e.event === event)
      .map(e => <any>e.data);
  }

  private flushQueue() {
    for (const message of this.pushQueue) {
      this.socket.send(message);
    }

    this.pushQueue = [];
  }

  private rejoin(): Promise<void[]> {
    const list: string[] = [];
    for (const channelName in this.channels) {
      if (!this.channels.hasOwnProperty(channelName)) {
        continue;
      }

      if (this.channels[channelName].joined) {
        list.push(channelName);
      }
    }

    const promises: Promise<void>[] = [];
    this.channels = {};
    for (const name of list) {
      promises.push(this.join(name));
    }

    return Promise.all(promises);
  }

}


