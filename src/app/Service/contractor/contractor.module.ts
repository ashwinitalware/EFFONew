import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContractorPageRoutingModule } from './contractor-routing.module';

import { ContractorPage } from './contractor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContractorPageRoutingModule
  ],
  declarations: [ContractorPage]
})
export class ContractorPageModule {}
