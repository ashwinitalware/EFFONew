import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PestcontrolservicePageRoutingModule } from './pestcontrolservice-routing.module';

import { PestcontrolservicePage } from './pestcontrolservice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PestcontrolservicePageRoutingModule
  ],
  declarations: [PestcontrolservicePage]
})
export class PestcontrolservicePageModule {}
