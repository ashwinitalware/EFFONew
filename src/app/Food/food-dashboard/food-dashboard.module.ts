import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodDashboardPageRoutingModule } from './food-dashboard-routing.module';

import { FoodDashboardPage } from './food-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodDashboardPageRoutingModule
  ],
  declarations: [FoodDashboardPage]
})
export class FoodDashboardPageModule {}
