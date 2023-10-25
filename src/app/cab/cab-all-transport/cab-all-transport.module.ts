import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabAllTransportPageRoutingModule } from './cab-all-transport-routing.module';

import { CabAllTransportPage } from './cab-all-transport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CabAllTransportPageRoutingModule
  ],
  declarations: [CabAllTransportPage]
})
export class CabAllTransportPageModule {}
