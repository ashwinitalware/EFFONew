import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then(m => m.OtpPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then(m => m.SigninPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'jobdashboard',
    loadChildren: () => import('./Job/jobdashboard/jobdashboard.module').then(m => m.JobdashboardPageModule)
  },
  {
    path: 'alljoblist',
    loadChildren: () => import('./job/alljoblist/alljoblist.module').then(m => m.AlljoblistPageModule)
  },
  {
    path: 'jobdetails',
    loadChildren: () => import('./job/jobdetails/jobdetails.module').then(m => m.JobdetailsPageModule)
  },
  {
    path: 'allcategories',
    loadChildren: () => import('./allcategories/allcategories.module').then(m => m.AllcategoriesPageModule)
  },
  {
    path: 'fulltime-job',
    loadChildren: () => import('./Job/fulltime-job/fulltime-job.module').then(m => m.FulltimeJobPageModule)
  },
  {
    path: 'parttime-job',
    loadChildren: () => import('./Job/parttime-job/parttime-job.module').then(m => m.ParttimeJobPageModule)
  },
  {
    path: 'workfromhome-job',
    loadChildren: () => import('./Job/workfromhome-job/workfromhome-job.module').then(m => m.WorkfromhomeJobPageModule)
  },
  {
    path: 'workabroad-job',
    loadChildren: () => import('./Job/workabroad-job/workabroad-job.module').then(m => m.WorkabroadJobPageModule)
  },
  {
    path: 'newsdashboard',
    loadChildren: () => import('./News/newsdashboard/newsdashboard.module').then(m => m.NewsdashboardPageModule)
  },
  {
    path: 'topnewsdeatils',
    loadChildren: () => import('./News/topnewsdeatils/topnewsdeatils.module').then(m => m.TopnewsdeatilsPageModule)
  },
  {
    path: 'discover',
    loadChildren: () => import('./News/discover/discover.module').then(m => m.DiscoverPageModule)
  },
  {
    path: 'accounts',
    loadChildren: () => import('./Job/accounts/accounts.module').then(m => m.AccountsPageModule)
  },
  {
    path: 'marketing',
    loadChildren: () => import('./Job/marketing/marketing.module').then(m => m.MarketingPageModule)
  },
  {
    path: 'itindustry',
    loadChildren: () => import('./Job/itindustry/itindustry.module').then(m => m.ItindustryPageModule)
  },
  {
    path: 'backoffice',
    loadChildren: () => import('./Job/backoffice/backoffice.module').then(m => m.BackofficePageModule)
  },
  {
    path: 'bpo',
    loadChildren: () => import('./Job/bpo/bpo.module').then(m => m.BpoPageModule)
  },
  {
    path: 'deliveryboy',
    loadChildren: () => import('./Job/deliveryboy/deliveryboy.module').then(m => m.DeliveryboyPageModule)
  },
  {
    path: 'teachers',
    loadChildren: () => import('./Job/teachers/teachers.module').then(m => m.TeachersPageModule)
  },
  {
    path: 'beautician',
    loadChildren: () => import('./Job/beautician/beautician.module').then(m => m.BeauticianPageModule)
  },
  {
    path: 'apply',
    loadChildren: () => import('./apply/apply.module').then(m => m.ApplyPageModule)
  },
  {
    path: 'empdashboard',
    loadChildren: () => import('./Employer/empdashboard/empdashboard.module').then(m => m.EmpdashboardPageModule)
  },
  {
    path: 'filters',
    loadChildren: () => import('./Job/filters/filters.module').then(m => m.FiltersPageModule)
  },
  {
    path: 'softwaredeveloper',
    loadChildren: () => import('./Job/softwaredeveloper/softwaredeveloper.module').then(m => m.SoftwaredeveloperPageModule)
  },
  {
    path: 'software-deatils',
    loadChildren: () => import('./Job/software-deatils/software-deatils.module').then(m => m.SoftwareDeatilsPageModule)
  },
  {
    path: 'joblist',
    loadChildren: () => import('./Job/joblist/joblist.module').then(m => m.JoblistPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./Job/history/history.module').then(m => m.HistoryPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./Job/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./Job/editprofile/editprofile.module').then(m => m.EditprofilePageModule)
  },
  {
    path: 'forgotpass',
    loadChildren: () => import('./Job/forgotpass/forgotpass.module').then(m => m.ForgotpassPageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./Job/verify/verify.module').then(m => m.VerifyPageModule)
  },
  {
    path: 'newpassword',
    loadChildren: () => import('./Job/newpassword/newpassword.module').then(m => m.NewpasswordPageModule)
  },  {
    path: 'notification',
    loadChildren: () => import('./Job/notification/notification.module').then( m => m.NotificationPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
