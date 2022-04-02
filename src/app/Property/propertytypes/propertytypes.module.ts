import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertytypesPageRoutingModule } from './propertytypes-routing.module';

import { PropertytypesPage } from './propertytypes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertytypesPageRoutingModule
  ],
  declarations: [PropertytypesPage]
})
export class PropertytypesPageModule {}
