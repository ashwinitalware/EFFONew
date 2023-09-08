import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BroadbandDashboardPageRoutingModule } from './broadband-dashboard-routing.module';

import { BroadbandDashboardPage } from './broadband-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BroadbandDashboardPageRoutingModule
  ],
  declarations: [BroadbandDashboardPage]
})
export class BroadbandDashboardPageModule {}
