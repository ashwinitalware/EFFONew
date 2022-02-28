import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycardPageRoutingModule } from './mycard-routing.module';

import { MycardPage } from './mycard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycardPageRoutingModule
  ],
  declarations: [MycardPage]
})
export class MycardPageModule {}
