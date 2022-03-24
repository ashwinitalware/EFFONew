import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubservicesPageRoutingModule } from './subservices-routing.module';

import { SubservicesPage } from './subservices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubservicesPageRoutingModule
  ],
  declarations: [SubservicesPage]
})
export class SubservicesPageModule {}
