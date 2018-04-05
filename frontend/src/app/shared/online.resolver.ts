import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { WebsocketService } from './websocket.service';
import { PlayerModel } from './player.model';

@Injectable()
export class OnlineResolver implements Resolve<PlayerModel[]> {

  constructor(private socket: WebsocketService) {
  }

  async resolve(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Promise<PlayerModel[]> {
    await this.socket.join('minecraft');
    const response: any = await this.socket.push('minecraft', 'online');
    return response.online;
  }
}
