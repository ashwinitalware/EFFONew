import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeriodicserPageRoutingModule } from './periodicser-routing.module';

import { PeriodicserPage } from './periodicser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeriodicserPageRoutingModule
  ],
  declarations: [PeriodicserPage]
})
export class PeriodicserPageModule {}
