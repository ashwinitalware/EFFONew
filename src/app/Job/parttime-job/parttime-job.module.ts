import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParttimeJobPageRoutingModule } from './parttime-job-routing.module';

import { ParttimeJobPage } from './parttime-job.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParttimeJobPageRoutingModule
  ],
  declarations: [ParttimeJobPage]
})
export class ParttimeJobPageModule {}
