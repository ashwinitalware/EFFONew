import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoftwareDeatilsPageRoutingModule } from './software-deatils-routing.module';

import { SoftwareDeatilsPage } from './software-deatils.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoftwareDeatilsPageRoutingModule
  ],
  declarations: [SoftwareDeatilsPage]
})
export class SoftwareDeatilsPageModule {}
