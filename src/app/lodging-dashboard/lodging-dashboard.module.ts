import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LodgingDashboardPageRoutingModule } from './lodging-dashboard-routing.module';

import { LodgingDashboardPage } from './lodging-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LodgingDashboardPageRoutingModule
  ],
  declarations: [LodgingDashboardPage]
})
export class LodgingDashboardPageModule {}
