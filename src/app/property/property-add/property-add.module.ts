import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertyAddPageRoutingModule } from './property-add-routing.module';

import { PropertyAddPage } from './property-add.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PropertyAddPageRoutingModule
  ],
  declarations: [PropertyAddPage]
})
export class PropertyAddPageModule {}
