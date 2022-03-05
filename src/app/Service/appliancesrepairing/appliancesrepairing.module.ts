import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppliancesrepairingPageRoutingModule } from './appliancesrepairing-routing.module';

import { AppliancesrepairingPage } from './appliancesrepairing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppliancesrepairingPageRoutingModule
  ],
  declarations: [AppliancesrepairingPage]
})
export class AppliancesrepairingPageModule {}
