import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HistoryPage } from '../history/history.page';
import { JobHomePage } from '../job-home/job-home.page';
import { JobProfilePage } from '../job-profile/job-profile.page';

import { JobdashboardPage } from './jobdashboard.page';

const routes: Routes = [
  {
    path: '',
    component: JobdashboardPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../job-home/job-home.module').then(
            (m) => m.JobHomePageModule
          ),
        // component: JobHomePage,
      },
      {
        path: 'history',
        loadChildren: () =>
          import('../history/history.module').then((m) => m.HistoryPageModule),
        // component: HistoryPage,
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../job-profile/job-profile.module').then(
            (m) => m.JobProfilePageModule
          ),
        // component: JobProfilePage,
      },
      {
        path: '',
        redirectTo: 'home',
        // component: HistoryPage,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [RouterModule],
})
export class JobdashboardPageRoutingModule {}
