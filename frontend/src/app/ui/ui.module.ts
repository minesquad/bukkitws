import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatProgressBarModule, MatSidenavModule,
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
    MatSidenavModule,
  ],
  exports: [
    MatToolbarModule,
    MatProgressBarModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
  ]
})
export class UiModule {
}
