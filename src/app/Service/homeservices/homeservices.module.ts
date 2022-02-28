import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeservicesPageRoutingModule } from './homeservices-routing.module';

import { HomeservicesPage } from './homeservices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeservicesPageRoutingModule
  ],
  declarations: [HomeservicesPage]
})
export class HomeservicesPageModule {}
