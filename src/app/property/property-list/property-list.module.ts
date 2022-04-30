import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertyListPageRoutingModule } from './property-list-routing.module';

import { PropertyListPage } from './property-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertyListPageRoutingModule
  ],
  declarations: [PropertyListPage]
})
export class PropertyListPageModule {}
