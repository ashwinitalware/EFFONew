import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterpropertyPageRoutingModule } from './filterproperty-routing.module';

import { FilterpropertyPage } from './filterproperty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterpropertyPageRoutingModule
  ],
  declarations: [FilterpropertyPage]
})
export class FilterpropertyPageModule {}
