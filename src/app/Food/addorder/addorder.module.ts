import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddorderPageRoutingModule } from './addorder-routing.module';

import { AddorderPage } from './addorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddorderPageRoutingModule
  ],
  declarations: [AddorderPage]
})
export class AddorderPageModule {}
