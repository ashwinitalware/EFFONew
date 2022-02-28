import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectronicsservicesPageRoutingModule } from './electronicsservices-routing.module';

import { ElectronicsservicesPage } from './electronicsservices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectronicsservicesPageRoutingModule
  ],
  declarations: [ElectronicsservicesPage]
})
export class ElectronicsservicesPageModule {}
