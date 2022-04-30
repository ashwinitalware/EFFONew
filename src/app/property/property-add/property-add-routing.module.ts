import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { PropertyAddPage } from './property-add.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyAddPage
  }
];

@NgModule({
  imports: [
    

    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyAddPageRoutingModule {}
