import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebsocketService } from '../shared/websocket.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'mine-minecraft-stats',
  templateUrl: './minecraft-stats.component.html',
  styleUrls: ['./minecraft-stats.component.scss']
})
export class MinecraftStatsComponent implements OnInit, OnDestroy {

  private _subscription: Subscription;
  private _stats: any;

  get stats(): any {
    return this._stats;
  }

  constructor(private socket: WebsocketService) {
  }

  async ngOnInit() {
    // await this.socket.join('minecraft');
    // this._subscription = this.socket.on('minecraft', 'stats').subscribe((stats: any) => {
    //   this._stats = stats;
    // });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

}
