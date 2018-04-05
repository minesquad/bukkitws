import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { WebsocketService } from './websocket.service';
import { EventModel } from './event.model';

@Injectable()
export class EventsResolver implements Resolve<EventModel[]> {

  constructor(private socket: WebsocketService) {
  }

  async resolve(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Promise<EventModel[]> {
    await this.socket.join('minecraft');
    const response: any = await this.socket.push('minecraft', 'events');
    return response.events;
  }
}
