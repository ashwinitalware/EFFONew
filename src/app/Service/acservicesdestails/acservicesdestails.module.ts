import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcservicesdestailsPageRoutingModule } from './acservicesdestails-routing.module';

import { AcservicesdestailsPage } from './acservicesdestails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcservicesdestailsPageRoutingModule
  ],
  declarations: [AcservicesdestailsPage]
})
export class AcservicesdestailsPageModule {}
