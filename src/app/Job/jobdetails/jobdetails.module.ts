import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobdetailsPageRoutingModule } from './jobdetails-routing.module';

import { JobdetailsPage } from './jobdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobdetailsPageRoutingModule
  ],
  declarations: [JobdetailsPage]
})
export class JobdetailsPageModule {}
