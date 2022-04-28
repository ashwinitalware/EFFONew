import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OldexdashboardPageRoutingModule } from './oldexdashboard-routing.module';

import { OldexdashboardPage } from './oldexdashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OldexdashboardPageRoutingModule
  ],
  declarations: [OldexdashboardPage]
})
export class OldexdashboardPageModule {}
