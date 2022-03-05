import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeautyPageRoutingModule } from './beauty-routing.module';

import { BeautyPage } from './beauty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeautyPageRoutingModule
  ],
  declarations: [BeautyPage]
})
export class BeautyPageModule {}
