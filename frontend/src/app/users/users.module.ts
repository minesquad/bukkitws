import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from "./users-routing.module";
import { UserStatsComponent } from './user-stats/user-stats.component';
import { UserAdvancementsComponent } from './user-advancements/user-advancements.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
  ],
  declarations: [
    UsersComponent,
    UserStatsComponent,
    UserAdvancementsComponent,
  ],
})
export class UsersModule {
}
