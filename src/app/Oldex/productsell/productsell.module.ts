import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsellPageRoutingModule } from './productsell-routing.module';

import { ProductsellPage } from './productsell.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsellPageRoutingModule
  ],
  declarations: [ProductsellPage]
})
export class ProductsellPageModule {}
