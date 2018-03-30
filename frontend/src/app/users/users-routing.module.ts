import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from "./users.component";
import { UsersResolver } from './users.resolver';

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
    component: UsersComponent,
  }
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
  ]
})
export class UsersRoutingModule {
}
