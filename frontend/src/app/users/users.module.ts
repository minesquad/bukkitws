import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from "./users-routing.module";
import { UserStatsComponent } from './user-stats/user-stats.component';
import { UserAdvancementsComponent } from './user-advancements/user-advancements.component';
import { UiModule } from '../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    UiModule,
  ],
  declarations: [
    UsersComponent,
    UserStatsComponent,
    UserAdvancementsComponent,
  ],
})
export class UsersModule {
}
