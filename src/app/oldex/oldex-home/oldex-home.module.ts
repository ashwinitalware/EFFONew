import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OldexHomePageRoutingModule } from './oldex-home-routing.module';

import { OldexHomePage } from './oldex-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OldexHomePageRoutingModule
  ],
  declarations: [OldexHomePage]
})
export class OldexHomePageModule {}
