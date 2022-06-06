import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabCitiesPageRoutingModule } from './cab-cities-routing.module';

import { CabCitiesPage } from './cab-cities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CabCitiesPageRoutingModule
  ],
  declarations: [CabCitiesPage]
})
export class CabCitiesPageModule {}
