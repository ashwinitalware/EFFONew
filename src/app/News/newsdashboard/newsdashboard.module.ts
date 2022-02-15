import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsdashboardPageRoutingModule } from './newsdashboard-routing.module';

import { NewsdashboardPage } from './newsdashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsdashboardPageRoutingModule
  ],
  declarations: [NewsdashboardPage]
})
export class NewsdashboardPageModule {}
