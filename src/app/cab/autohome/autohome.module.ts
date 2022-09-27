import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutohomePageRoutingModule } from './autohome-routing.module';

import { AutohomePage } from './autohome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutohomePageRoutingModule
  ],
  declarations: [AutohomePage]
})
export class AutohomePageModule {}
