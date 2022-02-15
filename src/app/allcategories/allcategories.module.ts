import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllcategoriesPageRoutingModule } from './allcategories-routing.module';

import { AllcategoriesPage } from './allcategories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllcategoriesPageRoutingModule
  ],
  declarations: [AllcategoriesPage]
})
export class AllcategoriesPageModule {}
