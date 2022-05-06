import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OldexMyProductsPageRoutingModule } from './oldex-my-products-routing.module';

import { OldexMyProductsPage } from './oldex-my-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OldexMyProductsPageRoutingModule
  ],
  declarations: [OldexMyProductsPage]
})
export class OldexMyProductsPageModule {}
