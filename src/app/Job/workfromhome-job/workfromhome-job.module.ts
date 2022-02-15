import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkfromhomeJobPageRoutingModule } from './workfromhome-job-routing.module';

import { WorkfromhomeJobPage } from './workfromhome-job.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkfromhomeJobPageRoutingModule
  ],
  declarations: [WorkfromhomeJobPage]
})
export class WorkfromhomeJobPageModule {}
