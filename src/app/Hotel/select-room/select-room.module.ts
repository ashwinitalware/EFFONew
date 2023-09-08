import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectRoomPageRoutingModule } from './select-room-routing.module';

import { SelectRoomPage } from './select-room.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectRoomPageRoutingModule
  ],
  declarations: [SelectRoomPage]
})
export class SelectRoomPageModule {}
