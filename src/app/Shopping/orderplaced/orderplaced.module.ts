import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderplacedPageRoutingModule } from './orderplaced-routing.module';

import { OrderplacedPage } from './orderplaced.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderplacedPageRoutingModule
  ],
  declarations: [OrderplacedPage]
})
export class OrderplacedPageModule {}
