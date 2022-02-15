import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackofficePageRoutingModule } from './backoffice-routing.module';

import { BackofficePage } from './backoffice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackofficePageRoutingModule
  ],
  declarations: [BackofficePage]
})
export class BackofficePageModule {}
