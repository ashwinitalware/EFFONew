import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabHistoryPageRoutingModule } from './cab-history-routing.module';

import { CabHistoryPage } from './cab-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CabHistoryPageRoutingModule
  ],
  declarations: [CabHistoryPage]
})
export class CabHistoryPageModule {}
