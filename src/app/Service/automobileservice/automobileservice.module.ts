import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutomobileservicePageRoutingModule } from './automobileservice-routing.module';

import { AutomobileservicePage } from './automobileservice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutomobileservicePageRoutingModule
  ],
  declarations: [AutomobileservicePage]
})
export class AutomobileservicePageModule {}
