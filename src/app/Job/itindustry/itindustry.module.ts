import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItindustryPageRoutingModule } from './itindustry-routing.module';

import { ItindustryPage } from './itindustry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItindustryPageRoutingModule
  ],
  declarations: [ItindustryPage]
})
export class ItindustryPageModule {}
