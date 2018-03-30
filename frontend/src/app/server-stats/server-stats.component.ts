import {Component, OnDestroy, OnInit} from '@angular/core';
import { WebsocketService } from "../shared/websocket.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'mine-server-stats',
  templateUrl: './server-stats.component.html',
  styleUrls: ['./server-stats.component.scss']
})
export class ServerStatsComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private stats: any;

  constructor(private socket: WebsocketService) { }

  async ngOnInit() {
    await this.socket.join('server');
    this.subscription = this.socket.on('server', 'stats').subscribe((stats: any) => {
      this.stats = stats;
      console.log(111)
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
