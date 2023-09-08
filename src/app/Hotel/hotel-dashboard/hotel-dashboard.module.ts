import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelDashboardPageRoutingModule } from './hotel-dashboard-routing.module';

import { HotelDashboardPage } from './hotel-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelDashboardPageRoutingModule
  ],
  declarations: [HotelDashboardPage]
})
export class HotelDashboardPageModule {}
