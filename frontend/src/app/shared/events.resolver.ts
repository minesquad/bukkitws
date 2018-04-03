import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { WebsocketService } from '../shared/websocket.service';

@Injectable()
export class EventsResolver implements Resolve<any> {

  constructor(private socket: WebsocketService) {
  }

  async resolve(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Promise<any> {
    await this.socket.join('minecraft');

    const response: any = await this.socket.push('minecraft', 'events');
    return response.events;
  }
}
