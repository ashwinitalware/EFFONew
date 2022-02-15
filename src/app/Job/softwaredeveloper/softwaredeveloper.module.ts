import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoftwaredeveloperPageRoutingModule } from './softwaredeveloper-routing.module';

import { SoftwaredeveloperPage } from './softwaredeveloper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoftwaredeveloperPageRoutingModule
  ],
  declarations: [SoftwaredeveloperPage]
})
export class SoftwaredeveloperPageModule {}
