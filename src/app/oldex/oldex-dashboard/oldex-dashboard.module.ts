import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OldexDashboardPageRoutingModule } from './oldex-dashboard-routing.module';

import { OldexDashboardPage } from './oldex-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OldexDashboardPageRoutingModule
  ],
  declarations: [OldexDashboardPage]
})
export class OldexDashboardPageModule {}
