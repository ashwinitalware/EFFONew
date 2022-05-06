import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OldexDetailsPageRoutingModule } from './oldex-details-routing.module';

import { OldexDetailsPage } from './oldex-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OldexDetailsPageRoutingModule
  ],
  declarations: [OldexDetailsPage]
})
export class OldexDetailsPageModule {}
