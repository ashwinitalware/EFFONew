import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllServicesPageRoutingModule } from './all-services-routing.module';

import { AllServicesPage } from './all-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllServicesPageRoutingModule
  ],
  declarations: [AllServicesPage]
})
export class AllServicesPageModule {}
