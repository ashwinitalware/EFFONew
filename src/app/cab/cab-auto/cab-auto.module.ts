import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabAutoPageRoutingModule } from './cab-auto-routing.module';

import { CabAutoPage } from './cab-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CabAutoPageRoutingModule
  ],
  declarations: [CabAutoPage]
})
export class CabAutoPageModule {}
