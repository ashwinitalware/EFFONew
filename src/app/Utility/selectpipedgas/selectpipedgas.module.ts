import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectpipedgasPageRoutingModule } from './selectpipedgas-routing.module';

import { SelectpipedgasPage } from './selectpipedgas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectpipedgasPageRoutingModule
  ],
  declarations: [SelectpipedgasPage]
})
export class SelectpipedgasPageModule {}
