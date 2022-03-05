import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomecleaningPageRoutingModule } from './homecleaning-routing.module';

import { HomecleaningPage } from './homecleaning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomecleaningPageRoutingModule
  ],
  declarations: [HomecleaningPage]
})
export class HomecleaningPageModule {}
