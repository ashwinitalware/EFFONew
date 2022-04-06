import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobHomePageRoutingModule } from './job-home-routing.module';

import { JobHomePage } from './job-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobHomePageRoutingModule
  ],
  declarations: [JobHomePage]
})
export class JobHomePageModule {}
