import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddtocartPageRoutingModule } from './addtocart-routing.module';

import { AddtocartPage } from './addtocart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddtocartPageRoutingModule
  ],
  declarations: [AddtocartPage]
})
export class AddtocartPageModule {}
