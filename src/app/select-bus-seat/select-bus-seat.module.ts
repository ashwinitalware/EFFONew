import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectBusSeatPageRoutingModule } from './select-bus-seat-routing.module';

import { SelectBusSeatPage } from './select-bus-seat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectBusSeatPageRoutingModule
  ],
  declarations: [SelectBusSeatPage]
})
export class SelectBusSeatPageModule {}
