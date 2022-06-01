import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookanyPageRoutingModule } from './bookany-routing.module';

import { BookanyPage } from './bookany.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookanyPageRoutingModule
  ],
  declarations: [BookanyPage]
})
export class BookanyPageModule {}
