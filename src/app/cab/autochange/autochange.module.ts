import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutochangePageRoutingModule } from './autochange-routing.module';

import { AutochangePage } from './autochange.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutochangePageRoutingModule
  ],
  declarations: [AutochangePage]
})
export class AutochangePageModule {}
