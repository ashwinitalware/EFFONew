import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyPageRoutingModule } from './apply-routing.module';

import { ApplyPage } from './apply.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyPageRoutingModule
  ],
  declarations: [ApplyPage]
})
export class ApplyPageModule {}
