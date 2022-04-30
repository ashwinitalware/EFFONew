import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertyOwnListPageRoutingModule } from './property-own-list-routing.module';

import { PropertyOwnListPage } from './property-own-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertyOwnListPageRoutingModule
  ],
  declarations: [PropertyOwnListPage]
})
export class PropertyOwnListPageModule {}
