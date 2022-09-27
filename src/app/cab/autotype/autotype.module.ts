import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutotypePageRoutingModule } from './autotype-routing.module';

import { AutotypePage } from './autotype.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutotypePageRoutingModule
  ],
  declarations: [AutotypePage]
})
export class AutotypePageModule {}
