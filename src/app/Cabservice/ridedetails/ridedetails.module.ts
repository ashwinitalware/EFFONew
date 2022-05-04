import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RidedetailsPageRoutingModule } from './ridedetails-routing.module';

import { RidedetailsPage } from './ridedetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RidedetailsPageRoutingModule
  ],
  declarations: [RidedetailsPage]
})
export class RidedetailsPageModule {}
