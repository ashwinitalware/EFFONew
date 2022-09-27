import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutohistoryPageRoutingModule } from './autohistory-routing.module';

import { AutohistoryPage } from './autohistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutohistoryPageRoutingModule
  ],
  declarations: [AutohistoryPage]
})
export class AutohistoryPageModule {}
