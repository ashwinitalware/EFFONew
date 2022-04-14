import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceBookingsPageRoutingModule } from './service-bookings-routing.module';

import { ServiceBookingsPage } from './service-bookings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceBookingsPageRoutingModule
  ],
  declarations: [ServiceBookingsPage]
})
export class ServiceBookingsPageModule {}
