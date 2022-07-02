import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtilitiesdashPageRoutingModule } from './utilitiesdash-routing.module';

import { UtilitiesdashPage } from './utilitiesdash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtilitiesdashPageRoutingModule
  ],
  declarations: [UtilitiesdashPage]
})
export class UtilitiesdashPageModule {}
