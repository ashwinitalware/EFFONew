import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewtrainPageRoutingModule } from './viewtrain-routing.module';

import { ViewtrainPage } from './viewtrain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewtrainPageRoutingModule
  ],
  declarations: [ViewtrainPage]
})
export class ViewtrainPageModule {}
