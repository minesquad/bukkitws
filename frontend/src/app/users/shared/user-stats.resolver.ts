import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { WebsocketService } from '../../shared/websocket.service';
import { UserStatModel } from './user-stat.model';

@Injectable()
export class UserStatsResolver implements Resolve<UserStatModel[]> {

  constructor(private socket: WebsocketService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<UserStatModel[]> | Promise<UserStatModel[]> | UserStatModel[] {
    return this.socket.push('users', 'stats', {
      'uuid': route.params.uuid
    }).then((response: any) => {
      return <UserStatModel[]>(response.stats);
    });
  }
}
