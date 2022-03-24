import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceslistingPageRoutingModule } from './serviceslisting-routing.module';

import { ServiceslistingPage } from './serviceslisting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceslistingPageRoutingModule
  ],
  declarations: [ServiceslistingPage]
})
export class ServiceslistingPageModule {}
