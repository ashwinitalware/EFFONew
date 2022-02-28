import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobiledetailsPageRoutingModule } from './mobiledetails-routing.module';

import { MobiledetailsPage } from './mobiledetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobiledetailsPageRoutingModule
  ],
  declarations: [MobiledetailsPage]
})
export class MobiledetailsPageModule {}
