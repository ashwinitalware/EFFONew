import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintedashboardPageRoutingModule } from './maintedashboard-routing.module';

import { MaintedashboardPage } from './maintedashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintedashboardPageRoutingModule
  ],
  declarations: [MaintedashboardPage]
})
export class MaintedashboardPageModule {}
