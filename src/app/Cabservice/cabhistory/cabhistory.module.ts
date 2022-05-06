import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabhistoryPageRoutingModule } from './cabhistory-routing.module';

import { CabhistoryPage } from './cabhistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CabhistoryPageRoutingModule
  ],
  declarations: [CabhistoryPage]
})
export class CabhistoryPageModule {}
