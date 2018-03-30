import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { WebsocketService } from './shared/websocket.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './ui/ui.module';
import { ServerStatsComponent } from './server-stats/server-stats.component';
import { ScriptLoaderService } from './shared/script-loader.service';
import { MapComponent } from './map/map.component';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    ServerStatsComponent,
    MapComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    UiModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    UsersModule,
    UiModule,
  ],
  providers: [
    WebsocketService,
    ScriptLoaderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private socket: WebsocketService) {
    this.socket.connect();
  }
}
