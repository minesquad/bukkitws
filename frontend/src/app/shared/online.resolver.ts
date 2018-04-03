import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { WebsocketService } from '../shared/websocket.service';

@Injectable()
export class OnlineResolver implements Resolve<void> {

  constructor(private socket: WebsocketService) {
  }

  async resolve(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Promise<void> {
    await this.socket.join('minecraft');

    const response: any = await this.socket.push('minecraft', 'online');
    console.log(response);

    return response;
  }
}
