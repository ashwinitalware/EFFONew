import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabOutstationPageRoutingModule } from './cab-outstation-routing.module';

import { CabOutstationPage } from './cab-outstation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CabOutstationPageRoutingModule
  ],
  declarations: [CabOutstationPage]
})
export class CabOutstationPageModule {}
