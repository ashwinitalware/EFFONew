import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertydashPageRoutingModule } from './propertydash-routing.module';

import { PropertydashPage } from './propertydash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertydashPageRoutingModule
  ],
  declarations: [PropertydashPage]
})
export class PropertydashPageModule {}
