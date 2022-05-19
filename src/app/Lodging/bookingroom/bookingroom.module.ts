import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingroomPageRoutingModule } from './bookingroom-routing.module';

import { BookingroomPage } from './bookingroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingroomPageRoutingModule
  ],
  declarations: [BookingroomPage]
})
export class BookingroomPageModule {}
