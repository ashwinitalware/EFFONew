import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcservicePageRoutingModule } from './acservice-routing.module';

import { AcservicePage } from './acservice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcservicePageRoutingModule
  ],
  declarations: [AcservicePage]
})
export class AcservicePageModule {}
