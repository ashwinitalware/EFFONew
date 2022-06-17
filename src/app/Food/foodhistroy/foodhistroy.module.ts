import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodhistroyPageRoutingModule } from './foodhistroy-routing.module';

import { FoodhistroyPage } from './foodhistroy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodhistroyPageRoutingModule
  ],
  declarations: [FoodhistroyPage]
})
export class FoodhistroyPageModule {}
