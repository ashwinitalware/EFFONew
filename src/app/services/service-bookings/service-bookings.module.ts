import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceBookingsPageRoutingModule } from './service-bookings-routing.module';

import { ServiceBookingsPage } from './service-bookings.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceBookingsPageRoutingModule,
  ],
  declarations: [ServiceBookingsPage],
})
export class ServiceBookingsPageModule {}
