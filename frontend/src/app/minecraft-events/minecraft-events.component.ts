import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebsocketService } from '../shared/websocket.service';
import { Subscription } from 'rxjs/Subscription';
import { SystemStatusComponent } from '../system-status/system-status.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mine-minecraft-events',
  templateUrl: './minecraft-events.component.html',
  styleUrls: ['./minecraft-events.component.scss']
})
export class MinecraftEventsComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  public events: any = [];

  constructor(private socket: WebsocketService, private route: ActivatedRoute) {
  }

  async ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.events = data.events;
    });
    this.subscription = this.socket.on('minecraft', 'events').subscribe((data: any) => {
      this.events = data.events;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
