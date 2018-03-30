import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { UserModel } from './user.model';
import { WebsocketService } from '../../shared/websocket.service';

@Injectable()
export class UserStatsResolver implements Resolve<UserModel[]> {

  constructor(private socket: WebsocketService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<UserModel[]> | Promise<UserModel[]> | UserModel[] {
    return this.socket.push('users', 'stats', {
      'uuid': '3d91467c-cf77-410c-8ce0-4713b3e3f532'
    });
  }
}
