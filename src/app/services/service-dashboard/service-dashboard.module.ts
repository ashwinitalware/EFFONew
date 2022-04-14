import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceDashboardPageRoutingModule } from './service-dashboard-routing.module';

import { ServiceDashboardPage } from './service-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceDashboardPageRoutingModule
  ],
  declarations: [ServiceDashboardPage]
})
export class ServiceDashboardPageModule {}
