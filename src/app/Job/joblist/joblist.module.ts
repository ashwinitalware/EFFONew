import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoblistPageRoutingModule } from './joblist-routing.module';

import { JoblistPage } from './joblist.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, JoblistPageRoutingModule],
  declarations: [JoblistPage],
})
export class JoblistPageModule {}
