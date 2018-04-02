import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { WebsocketService } from './shared/websocket.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './ui/ui.module';
import { ScriptLoaderService } from './shared/script-loader.service';
import { MapComponent } from './map/map.component';
import { UsersModule } from './users/users.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MinecraftStatsComponent } from './minecraft-stats/minecraft-stats.component';
import { MinecraftModule } from './minecraft/minecraft.module';
import { TopComponent } from './top/top.component';
import { AboutComponent } from './about/about.component';
import { SystemStatusComponent } from './system-status/system-status.component';

@NgModule({
  declarations: [
    AppComponent,
    SystemStatusComponent,
    MinecraftStatsComponent,
    HomepageComponent,
    MapComponent,
    PageNotFoundComponent,
    PageNotFoundComponent,
    TopComponent,
    AboutComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    UiModule,
    UsersModule,
    AppRoutingModule,
    MinecraftModule,
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
