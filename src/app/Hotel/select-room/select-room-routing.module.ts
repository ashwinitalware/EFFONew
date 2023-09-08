import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectRoomPage } from './select-room.page';

const routes: Routes = [
  {
    path: '',
    component: SelectRoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectRoomPageRoutingModule {}
