import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmationpopupPageRoutingModule } from './confirmationpopup-routing.module';

import { ConfirmationpopupPage } from './confirmationpopup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmationpopupPageRoutingModule
  ],
  declarations: [ConfirmationpopupPage]
})
export class ConfirmationpopupPageModule {}
