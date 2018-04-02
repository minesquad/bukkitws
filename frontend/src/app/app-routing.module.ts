import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MapComponent } from './map/map.component';
import { TopComponent } from './top/top.component';
import { AboutComponent } from './about/about.component';
import { MainFrameComponent } from './main-frame/main-frame-component';
import { AppResolver } from './app.resolver';

const routes: Routes = [
  <Route>{
    path: '',
    component: MainFrameComponent,
    children: [
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'top',
        component: TopComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
    ],
    resolve: {
      app: AppResolver,
    }
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  <Route>{
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
