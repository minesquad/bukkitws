import { ApplicationRef, Injectable } from '@angular/core';
import { Channel, Socket } from 'phoenix';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

export interface ChannelEvent {
  channel: any;
  event?: any;
  payload?: any;
}

export interface ChannelEntry {
  channel: Channel;
  promise: Promise<boolean>;
}

@Injectable()
export class WebsocketService {


  private socket: Socket;

  private channels: {
    [propName: string]: ChannelEntry
  } = {};

  private params: {
    [propName: string]: any
  } = {};

  private eventBus: Subject<ChannelEvent> = new Subject<ChannelEvent>();

  constructor(private app: ApplicationRef) {
  }

  public connect(params: any = {}): Promise<any> {
    if (this.socket && this.socket.isConnected() && this.params === params) {
      return Promise.resolve();
    }

    this.socket = null;
    this.params = params;
    this.channels = {};

    return this.establishConnection();
  }

  // noinspection JSUnusedGlobalSymbols
  public disconnect() {
    if (this.isConnected()) {
      this.socket.disconnect();
    }
  }

  public isConnected(): boolean {
    return this.socket && this.socket.isConnected();
  }

  private establishConnection(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.socket = new Socket('ws://localhost:4000/socket', {
        params: this.params
      });

      this.socket.onError((e: any) => {
        this.app.tick();
        reject(e);
      });

      this.socket.onOpen((r: any) => {
        this.app.tick();
        resolve(r);
      });

      this.socket.connect();
    });
  }

  public join(channelName: string): Promise<boolean> {
    if (!this.channels[channelName]) {
      const channel = this.socket.channel(channelName);

      channel.onMessage = (eventName, payload, ref) => {
        if (eventName !== 'phx_reply' && -1 === eventName.indexOf('chan_reply_')) {
          this.fireChannelEvent(channelName, eventName, payload);
        }
        return Channel.prototype.onMessage.call(channel, eventName, payload, ref);
      };

      this.channels[channelName] = {
        channel: channel,
        promise: new Promise((resolve, reject) => {
          channel.join()
            .receive('ok', (response) => {
              console.info(`Connected to ${channelName} channel`);
              this.fireChannelEvent(channelName, 'join', response);
              resolve(response);
            })
            .receive('error', (response) => {
              console.error(`Error during connection to ${channelName} channel`);
              console.error(response);
              this.fireChannelEvent(channelName, 'error', response);
              reject(response);
            })
          ;
          // channel.rejoinUntilConnected();
        })
      };
    }

    return this.channels[channelName].promise;
  }

  // noinspection JSUnusedGlobalSymbols
  public push<T>(channel: string, event: string, payload: any = {}, timeout: number = 10000): Promise<T> {
    return this.join(channel).then(() => {
      return this.channels[channel].promise.then(() => {
        return new Promise<T>((resolve, reject) => {
          this.channels[channel].channel.push(event, payload, timeout)
            .receive('ok', (response: any) => {
              resolve(<T>response);
              this.app.tick();
            })
            .receive('error', (response: any) => {
              reject(<any>response);
              this.app.tick();
            })
            .receive('timeout', () => {
              reject(<any>{error: 'timeout'});
              this.app.tick();
            });
        });
      });
    });
  }

  public on<T>(channel: string, event: string): Observable<T> {
    return this.eventBus.asObservable()
      .filter(e => e.channel === channel)
      .filter(e => e.event === event)
      .map(e => <any>e.payload);
  }

  private fireChannelEvent(channel: string, event: string, payload: any) {
    this.eventBus.next(<ChannelEvent>{
      channel: channel,
      event: event,
      payload: payload
    });
    this.app.tick();
  }


}


