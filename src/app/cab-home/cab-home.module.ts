import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabHomePageRoutingModule } from './cab-home-routing.module';

import { CabHomePage } from './cab-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CabHomePageRoutingModule
  ],
  declarations: [CabHomePage]
})
export class CabHomePageModule {}
