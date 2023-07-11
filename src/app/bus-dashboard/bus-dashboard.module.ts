import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusDashboardPageRoutingModule } from './bus-dashboard-routing.module';

import { BusDashboardPage } from './bus-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusDashboardPageRoutingModule
  ],
  declarations: [BusDashboardPage]
})
export class BusDashboardPageModule {}
