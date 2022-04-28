import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmpickupPageRoutingModule } from './confirmpickup-routing.module';

import { ConfirmpickupPage } from './confirmpickup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmpickupPageRoutingModule
  ],
  declarations: [ConfirmpickupPage]
})
export class ConfirmpickupPageModule {}
