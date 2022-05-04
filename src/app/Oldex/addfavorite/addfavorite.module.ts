import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddfavoritePageRoutingModule } from './addfavorite-routing.module';

import { AddfavoritePage } from './addfavorite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddfavoritePageRoutingModule
  ],
  declarations: [AddfavoritePage]
})
export class AddfavoritePageModule {}
