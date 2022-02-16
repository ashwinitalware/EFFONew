import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotpassPageRoutingModule } from './forgotpass-routing.module';

import { ForgotpassPage } from './forgotpass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotpassPageRoutingModule
  ],
  declarations: [ForgotpassPage]
})
export class ForgotpassPageModule {}
