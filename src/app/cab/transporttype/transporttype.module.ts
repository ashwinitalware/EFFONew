import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransporttypePageRoutingModule } from './transporttype-routing.module';

import { TransporttypePage } from './transporttype.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransporttypePageRoutingModule
  ],
  declarations: [TransporttypePage]
})
export class TransporttypePageModule {}
