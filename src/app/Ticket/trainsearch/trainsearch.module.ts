import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainsearchPageRoutingModule } from './trainsearch-routing.module';

import { TrainsearchPage } from './trainsearch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainsearchPageRoutingModule
  ],
  declarations: [TrainsearchPage]
})
export class TrainsearchPageModule {}
