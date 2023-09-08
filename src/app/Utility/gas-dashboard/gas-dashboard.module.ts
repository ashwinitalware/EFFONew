import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GasDashboardPageRoutingModule } from './gas-dashboard-routing.module';

import { GasDashboardPage } from './gas-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GasDashboardPageRoutingModule
  ],
  declarations: [GasDashboardPage]
})
export class GasDashboardPageModule {}
