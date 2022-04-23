import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingHomePageRoutingModule } from './shopping-home-routing.module';

import { ShoppingHomePage } from './shopping-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingHomePageRoutingModule
  ],
  declarations: [ShoppingHomePage]
})
export class ShoppingHomePageModule {}
