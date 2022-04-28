import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentalsPageRoutingModule } from './rentals-routing.module';

import { RentalsPage } from './rentals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RentalsPageRoutingModule
  ],
  declarations: [RentalsPage]
})
export class RentalsPageModule {}
