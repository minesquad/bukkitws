import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { WebsocketService } from './shared/websocket.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppResolver implements Resolve<void> {

  constructor(private socket: WebsocketService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<void> | Promise<void> | void {
    return this.socket.connect();
  }
}
