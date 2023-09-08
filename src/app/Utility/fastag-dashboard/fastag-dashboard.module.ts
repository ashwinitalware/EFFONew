import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FastagDashboardPageRoutingModule } from './fastag-dashboard-routing.module';

import { FastagDashboardPage } from './fastag-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FastagDashboardPageRoutingModule
  ],
  declarations: [FastagDashboardPage]
})
export class FastagDashboardPageModule {}
