import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CivilcontractorPageRoutingModule } from './civilcontractor-routing.module';

import { CivilcontractorPage } from './civilcontractor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CivilcontractorPageRoutingModule
  ],
  declarations: [CivilcontractorPage]
})
export class CivilcontractorPageModule {}
