import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from "./users.component";
import { UsersResolver } from './shared/users.resolver';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { UserStatsResolver } from './shared/user-stats.resolver';
import { UserAdvancementsResolver } from './shared/user-advancements.resolver';
import { UserAdvancementsComponent } from './user-advancements/user-advancements.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    resolve: {
      users: UsersResolver
    },
  },
  {
    path: 'users/:uuid',
    component: UserStatsComponent,
    resolve: {
      stats: UserStatsResolver
    },
  },
  {
    path: 'users/:uuid/advancements',
    component: UserAdvancementsComponent,
    resolve: {
      advancements: UserAdvancementsResolver
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    UsersResolver,
    UserStatsResolver,
    UserAdvancementsResolver,
  ]
})
export class UsersRoutingModule {
}
