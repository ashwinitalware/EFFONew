import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LodgingListingPageRoutingModule } from './lodging-listing-routing.module';

import { LodgingListingPage } from './lodging-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LodgingListingPageRoutingModule
  ],
  declarations: [LodgingListingPage]
})
export class LodgingListingPageModule {}
