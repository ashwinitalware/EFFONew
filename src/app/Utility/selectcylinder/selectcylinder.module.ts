import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectcylinderPageRoutingModule } from './selectcylinder-routing.module';

import { SelectcylinderPage } from './selectcylinder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectcylinderPageRoutingModule
  ],
  declarations: [SelectcylinderPage]
})
export class SelectcylinderPageModule {}
