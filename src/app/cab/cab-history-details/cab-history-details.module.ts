import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabHistoryDetailsPageRoutingModule } from './cab-history-details-routing.module';

import { CabHistoryDetailsPage } from './cab-history-details.page';
import { NgxStarRatingModule } from 'ngx-star-rating';

@NgModule({
  imports: [
    CommonModule,
    NgxStarRatingModule,
    FormsModule,
    IonicModule,
    CabHistoryDetailsPageRoutingModule
  ],
  declarations: [CabHistoryDetailsPage]
})
export class CabHistoryDetailsPageModule {}
