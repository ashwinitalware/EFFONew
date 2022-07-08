import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabTabsPageRoutingModule } from './cab-tabs-routing.module';

import { CabTabsPage } from './cab-tabs.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CabTabsPageRoutingModule],
  declarations: [CabTabsPage],
})
export class CabTabsPageModule {}
