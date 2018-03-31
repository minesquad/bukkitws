import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { UserModel } from './user.model';
import { WebsocketService } from '../../shared/websocket.service';
import { UserAdvancementModel } from './user-advancement.model';

@Injectable()
export class UserAdvancementsResolver implements Resolve<UserAdvancementModel[]> {

  constructor(private socket: WebsocketService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<UserAdvancementModel[]> | Promise<UserAdvancementModel[]> | UserAdvancementModel[] {
    return this.socket.push('users', 'advancements', {
      'uuid': route.params.uuid
    }).then((response: any) => {
      return <UserAdvancementModel[]>(response.advancements);
    });
  }
}
