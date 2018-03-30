import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatProgressBarModule,
  MatToolbarModule
} from "@angular/material";

@NgModule({
  imports: [
    MatToolbarModule,
    MatProgressBarModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    MatToolbarModule,
    MatProgressBarModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class UiModule {
}
