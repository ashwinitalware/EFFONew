import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BpoPageRoutingModule } from './bpo-routing.module';

import { BpoPage } from './bpo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BpoPageRoutingModule
  ],
  declarations: [BpoPage]
})
export class BpoPageModule {}
