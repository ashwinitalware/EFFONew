import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabserdashboardPageRoutingModule } from './cabserdashboard-routing.module';

import { CabserdashboardPage } from './cabserdashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CabserdashboardPageRoutingModule
  ],
  declarations: [CabserdashboardPage]
})
export class CabserdashboardPageModule {}
