import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopnewsdeatilsPageRoutingModule } from './topnewsdeatils-routing.module';

import { TopnewsdeatilsPage } from './topnewsdeatils.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopnewsdeatilsPageRoutingModule
  ],
  declarations: [TopnewsdeatilsPage]
})
export class TopnewsdeatilsPageModule {}
