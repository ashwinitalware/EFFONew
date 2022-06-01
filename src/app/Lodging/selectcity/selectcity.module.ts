import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectcityPageRoutingModule } from './selectcity-routing.module';

import { SelectcityPage } from './selectcity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectcityPageRoutingModule
  ],
  declarations: [SelectcityPage]
})
export class SelectcityPageModule {}
