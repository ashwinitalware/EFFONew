import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpdashboardPageRoutingModule } from './empdashboard-routing.module';

import { EmpdashboardPage } from './empdashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpdashboardPageRoutingModule
  ],
  declarations: [EmpdashboardPage]
})
export class EmpdashboardPageModule {}
