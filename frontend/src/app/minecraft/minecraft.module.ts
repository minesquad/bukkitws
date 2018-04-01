import { NgModule } from '@angular/core';
import { MinecraftService } from './shared/minecraft.service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [MinecraftService],
})
export class MinecraftModule {
  constructor(ms: MinecraftService) {
    console.log(ms);
  }
}
