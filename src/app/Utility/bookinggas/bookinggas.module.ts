import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookinggasPageRoutingModule } from './bookinggas-routing.module';

import { BookinggasPage } from './bookinggas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookinggasPageRoutingModule
  ],
  declarations: [BookinggasPage]
})
export class BookinggasPageModule {}
