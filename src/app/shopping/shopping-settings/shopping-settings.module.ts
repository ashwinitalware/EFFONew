import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingSettingsPageRoutingModule } from './shopping-settings-routing.module';

import { ShoppingSettingsPage } from './shopping-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingSettingsPageRoutingModule
  ],
  declarations: [ShoppingSettingsPage]
})
export class ShoppingSettingsPageModule {}
