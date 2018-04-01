import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule,
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
    MatTableModule,
  ],
  exports: [
    MatToolbarModule,
    MatProgressBarModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
  ]
})
export class UiModule {
}
