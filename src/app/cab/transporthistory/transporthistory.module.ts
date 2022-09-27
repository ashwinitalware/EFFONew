import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransporthistoryPageRoutingModule } from './transporthistory-routing.module';

import { TransporthistoryPage } from './transporthistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransporthistoryPageRoutingModule
  ],
  declarations: [TransporthistoryPage]
})
export class TransporthistoryPageModule {}
