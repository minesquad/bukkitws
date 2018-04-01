import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebsocketService } from '../shared/websocket.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'mine-minecraft-stats',
  templateUrl: './minecraft-stats.component.html',
  styleUrls: ['./minecraft-stats.component.scss']
})
export class MinecraftStatsComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private stats: any;

  constructor(private socket: WebsocketService) {
  }

  async ngOnInit() {
    await this.socket.join('minecraft');
    this.subscription = this.socket.on('minecraft', 'stats').subscribe((stats: any) => {
      this.stats = stats;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
