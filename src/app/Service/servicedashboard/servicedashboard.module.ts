import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicedashboardPageRoutingModule } from './servicedashboard-routing.module';

import { ServicedashboardPage } from './servicedashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicedashboardPageRoutingModule
  ],
  declarations: [ServicedashboardPage]
})
export class ServicedashboardPageModule {}
