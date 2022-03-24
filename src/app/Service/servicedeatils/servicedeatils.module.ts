import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicedeatilsPageRoutingModule } from './servicedeatils-routing.module';

import { ServicedeatilsPage } from './servicedeatils.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicedeatilsPageRoutingModule
  ],
  declarations: [ServicedeatilsPage]
})
export class ServicedeatilsPageModule {}
