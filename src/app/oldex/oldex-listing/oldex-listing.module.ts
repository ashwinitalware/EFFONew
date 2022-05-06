import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OldexListingPageRoutingModule } from './oldex-listing-routing.module';

import { OldexListingPage } from './oldex-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OldexListingPageRoutingModule
  ],
  declarations: [OldexListingPage]
})
export class OldexListingPageModule {}
