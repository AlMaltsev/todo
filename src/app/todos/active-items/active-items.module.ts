import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ActiveItemsRoutingModule } from './active-items-routing.module';
import { ActiveItemsComponent } from './active-items.component';

@NgModule({
  imports: [
    CommonModule,
    ActiveItemsRoutingModule
  ],
  declarations: [ActiveItemsComponent]
})
export class ActiveItemsModule { }
