import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertydeatilsPageRoutingModule } from './propertydeatils-routing.module';

import { PropertydeatilsPage } from './propertydeatils.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertydeatilsPageRoutingModule
  ],
  declarations: [PropertydeatilsPage]
})
export class PropertydeatilsPageModule {}
