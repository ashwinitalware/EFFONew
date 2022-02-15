import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { IonicSelectableModule } from 'ionic-selectable';

import { IonicModule } from '@ionic/angular';

import { JobdashboardPageRoutingModule } from './jobdashboard-routing.module';

import { JobdashboardPage } from './jobdashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobdashboardPageRoutingModule

  ],
  declarations: [JobdashboardPage]
})
export class JobdashboardPageModule { }
