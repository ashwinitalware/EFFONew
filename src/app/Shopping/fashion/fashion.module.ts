import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FashionPageRoutingModule } from './fashion-routing.module';

import { FashionPage } from './fashion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FashionPageRoutingModule
  ],
  declarations: [FashionPage]
})
export class FashionPageModule {}
