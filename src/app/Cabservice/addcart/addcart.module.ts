import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcartPageRoutingModule } from './addcart-routing.module';

import { AddcartPage } from './addcart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcartPageRoutingModule
  ],
  declarations: [AddcartPage]
})
export class AddcartPageModule {}
