import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopdashPageRoutingModule } from './shopdash-routing.module';

import { ShopdashPage } from './shopdash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopdashPageRoutingModule
  ],
  declarations: [ShopdashPage]
})
export class ShopdashPageModule {}
