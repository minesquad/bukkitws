import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { UserModel } from './user.model';
import { WebsocketService } from '../../shared/websocket.service';

@Injectable()
export class UsersResolver implements Resolve<UserModel[]> {

  constructor(private socket: WebsocketService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<UserModel[]> | Promise<UserModel[]> | UserModel[] {
    return this.socket.push('users', 'list').then((response: any) => {
      return <UserModel[]>(response.users);
    });
  }
}
