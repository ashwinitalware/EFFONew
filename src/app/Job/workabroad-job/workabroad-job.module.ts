import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkabroadJobPageRoutingModule } from './workabroad-job-routing.module';

import { WorkabroadJobPage } from './workabroad-job.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkabroadJobPageRoutingModule
  ],
  declarations: [WorkabroadJobPage]
})
export class WorkabroadJobPageModule {}
