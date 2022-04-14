import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceSubcategoriesPageRoutingModule } from './service-subcategories-routing.module';

import { ServiceSubcategoriesPage } from './service-subcategories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceSubcategoriesPageRoutingModule
  ],
  declarations: [ServiceSubcategoriesPage]
})
export class ServiceSubcategoriesPageModule {}
