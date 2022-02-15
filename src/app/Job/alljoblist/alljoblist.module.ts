import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlljoblistPageRoutingModule } from './alljoblist-routing.module';

import { AlljoblistPage } from './alljoblist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlljoblistPageRoutingModule
  ],
  declarations: [AlljoblistPage]
})
export class AlljoblistPageModule {}
