import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabTransportPageRoutingModule } from './cab-transport-routing.module';

import { CabTransportPage } from './cab-transport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CabTransportPageRoutingModule
  ],
  declarations: [CabTransportPage]
})
export class CabTransportPageModule {}
