import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarketingPageRoutingModule } from './marketing-routing.module';

import { MarketingPage } from './marketing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarketingPageRoutingModule
  ],
  declarations: [MarketingPage]
})
export class MarketingPageModule {}
