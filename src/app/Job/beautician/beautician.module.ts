import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeauticianPageRoutingModule } from './beautician-routing.module';

import { BeauticianPage } from './beautician.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeauticianPageRoutingModule
  ],
  declarations: [BeauticianPage]
})
export class BeauticianPageModule {}
