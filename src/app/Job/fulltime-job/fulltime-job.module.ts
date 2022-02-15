import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FulltimeJobPageRoutingModule } from './fulltime-job-routing.module';

import { FulltimeJobPage } from './fulltime-job.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FulltimeJobPageRoutingModule
  ],
  declarations: [FulltimeJobPage]
})
export class FulltimeJobPageModule {}
