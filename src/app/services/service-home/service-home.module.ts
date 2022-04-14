import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceHomePageRoutingModule } from './service-home-routing.module';

import { ServiceHomePage } from './service-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceHomePageRoutingModule
  ],
  declarations: [ServiceHomePage]
})
export class ServiceHomePageModule {}
