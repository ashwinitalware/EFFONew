import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabRentalPageRoutingModule } from './cab-rental-routing.module';

import { CabRentalPage } from './cab-rental.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CabRentalPageRoutingModule
  ],
  declarations: [CabRentalPage]
})
export class CabRentalPageModule {}
