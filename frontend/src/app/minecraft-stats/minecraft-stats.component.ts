import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebsocketService } from '../shared/websocket.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mine-minecraft-stats',
  templateUrl: './minecraft-stats.component.html',
  styleUrls: ['./minecraft-stats.component.scss']
})
export class MinecraftStatsComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  public online: any;

  constructor(private socket: WebsocketService, private route: ActivatedRoute) {
  }


  async ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.online = data.online;
    });
    this.subscription = this.socket.on('minecraft', 'online').subscribe((data: any) => {
      this.online = data.online;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
