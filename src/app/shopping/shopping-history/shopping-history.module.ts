import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingHistoryPageRoutingModule } from './shopping-history-routing.module';

import { ShoppingHistoryPage } from './shopping-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingHistoryPageRoutingModule
  ],
  declarations: [ShoppingHistoryPage]
})
export class ShoppingHistoryPageModule {}
