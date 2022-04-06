import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobProfilePageRoutingModule } from './job-profile-routing.module';

import { JobProfilePage } from './job-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    JobProfilePageRoutingModule,
  ],
  declarations: [JobProfilePage],
})
export class JobProfilePageModule {}
