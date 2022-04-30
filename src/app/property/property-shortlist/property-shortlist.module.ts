import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertyShortlistPageRoutingModule } from './property-shortlist-routing.module';

import { PropertyShortlistPage } from './property-shortlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertyShortlistPageRoutingModule
  ],
  declarations: [PropertyShortlistPage]
})
export class PropertyShortlistPageModule {}
