import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookticketPageRoutingModule } from './bookticket-routing.module';

import { BookticketPage } from './bookticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookticketPageRoutingModule
  ],
  declarations: [BookticketPage]
})
export class BookticketPageModule {}
