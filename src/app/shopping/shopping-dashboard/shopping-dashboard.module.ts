import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingDashboardPageRoutingModule } from './shopping-dashboard-routing.module';

import { ShoppingDashboardPage } from './shopping-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingDashboardPageRoutingModule
  ],
  declarations: [ShoppingDashboardPage]
})
export class ShoppingDashboardPageModule {}
