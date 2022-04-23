import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingSettingsPage } from './shopping-settings.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingSettingsPageRoutingModule {}
