import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { WebsocketService } from "./shared/websocket.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UiModule } from "./ui/ui.module";
import { ServerStatsComponent } from "./server-stats/server-stats.component";
import { UsersModule } from "./users/users.module";

@NgModule({
  declarations: [
    AppComponent,
    ServerStatsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UiModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    UsersModule,
  ],
  providers: [
    WebsocketService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private socket: WebsocketService) {
    this.socket.connect();
  }
}
