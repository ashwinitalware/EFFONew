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
  },
  {
    path: 'notification',
    loadChildren: () => import('./Job/notification/notification.module').then(m => m.NotificationPageModule)
  },
  {
    path: 'servicedashboard',
    loadChildren: () => import('./Service/servicedashboard/servicedashboard.module').then(m => m.ServicedashboardPageModule)
  },
  {
    path: 'maintedashboard',
    loadChildren: () => import('./Maintenance/maintedashboard/maintedashboard.module').then(m => m.MaintedashboardPageModule)
  },
  {
    path: 'cabserdashboard',
    loadChildren: () => import('./Cabservice/cabserdashboard/cabserdashboard.module').then(m => m.CabserdashboardPageModule)
  },
  {
    path: 'shopdash',
    loadChildren: () => import('./Shopping/shopdash/shopdash.module').then(m => m.ShopdashPageModule)
  },
  {
    path: 'periodicser',
    loadChildren: () => import('./Cabservice/periodicser/periodicser.module').then(m => m.PeriodicserPageModule)
  },
  {
    path: 'allservices',
    loadChildren: () => import('./Cabservice/allservices/allservices.module').then(m => m.AllservicesPageModule)
  },
  {
    path: 'addcart',
    loadChildren: () => import('./Cabservice/addcart/addcart.module').then(m => m.AddcartPageModule)
  },
  {
    path: 'electronicsservices',
    loadChildren: () => import('./Service/electronicsservices/electronicsservices.module').then(m => m.ElectronicsservicesPageModule)
  },
  {
    path: 'homeservices',
    loadChildren: () => import('./Service/homeservices/homeservices.module').then(m => m.HomeservicesPageModule)
  },
  {
    path: 'allservices',
    loadChildren: () => import('./Service/allservices/allservices.module').then(m => m.AllservicesPageModule)
  },
  {
    path: 'automobileservice',
    loadChildren: () => import('./Service/automobileservice/automobileservice.module').then(m => m.AutomobileservicePageModule)
  },
  {
    path: 'allshopcategories',
    loadChildren: () => import('./Shopping/allshopcategories/allshopcategories.module').then(m => m.AllshopcategoriesPageModule)
  },
  {
    path: 'mobile',
    loadChildren: () => import('./Shopping/mobile/mobile.module').then(m => m.MobilePageModule)
  },
  {
    path: 'mobiledetails',
    loadChildren: () => import('./Shopping/mobiledetails/mobiledetails.module').then(m => m.MobiledetailsPageModule)
  },
  {
    path: 'mycard',
    loadChildren: () => import('./Shopping/mycard/mycard.module').then(m => m.MycardPageModule)
  },
  {
    path: 'fashion',
    loadChildren: () => import('./Shopping/fashion/fashion.module').then(m => m.FashionPageModule)
  },
  {
    path: 'acservice',
    loadChildren: () => import('./Service/acservice/acservice.module').then(m => m.AcservicePageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./Service/cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: 'pestcontrolservice',
    loadChildren: () => import('./Service/pestcontrolservice/pestcontrolservice.module').then(m => m.PestcontrolservicePageModule)
  },
  {
    path: 'all-services',
    loadChildren: () => import('./Service/all-services/all-services.module').then(m => m.AllServicesPageModule)
  },
  {
    path: 'homecleaning',
    loadChildren: () => import('./Service/homecleaning/homecleaning.module').then(m => m.HomecleaningPageModule)
  },
  {
    path: 'contractor',
    loadChildren: () => import('./Service/contractor/contractor.module').then(m => m.ContractorPageModule)
  },
  {
    path: 'civilcontractor',
    loadChildren: () => import('./Service/civilcontractor/civilcontractor.module').then(m => m.CivilcontractorPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./Service/reviews/reviews.module').then(m => m.ReviewsPageModule)
  },
  {
    path: 'appliancesrepairing',
    loadChildren: () => import('./Service/appliancesrepairing/appliancesrepairing.module').then(m => m.AppliancesrepairingPageModule)
  },
  {
    path: 'beauty',
    loadChildren: () => import('./Service/beauty/beauty.module').then(m => m.BeautyPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./Job/filter/filter.module').then(m => m.FilterPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./Job/contact/contact.module').then(m => m.ContactPageModule)
  },

  {
    path: 'acservicesdestails',
    loadChildren: () => import('./Service/acservicesdestails/acservicesdestails.module').then(m => m.AcservicesdestailsPageModule)
  },
  {
    path: 'bookappointment',
    loadChildren: () => import('./Service/bookappointment/bookappointment.module').then(m => m.BookappointmentPageModule)
  },
  {
    path: 'subservices',
    loadChildren: () => import('./Service/subservices/subservices.module').then(m => m.SubservicesPageModule)
  },
  {
    path: 'serviceslisting',
    loadChildren: () => import('./Service/serviceslisting/serviceslisting.module').then(m => m.ServiceslistingPageModule)
  },
  {
    path: 'servicedeatils',
    loadChildren: () => import('./Service/servicedeatils/servicedeatils.module').then(m => m.ServicedeatilsPageModule)
  },
  {
    path: 'share',
    loadChildren: () => import('./share/share.module').then(m => m.SharePageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./Service/modal/modal.module').then(m => m.ModalPageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./Shopping/address/address.module').then(m => m.AddressPageModule)
  },
  {
    path: 'ordersummery',
    loadChildren: () => import('./Shopping/ordersummery/ordersummery.module').then(m => m.OrdersummeryPageModule)
  },
  {
    path: 'orderplaced',
    loadChildren: () => import('./Shopping/orderplaced/orderplaced.module').then(m => m.OrderplacedPageModule)
  },
  {
    path: 'propertydash',
    loadChildren: () => import('./Property/propertydash/propertydash.module').then(m => m.PropertydashPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./Property/details/details.module').then(m => m.DetailsPageModule)
  },
  {
    path: 'saleandrent',
    loadChildren: () => import('./Property/saleandrent/saleandrent.module').then(m => m.SaleandrentPageModule)
  },
  {
    path: 'propertytypes',
    loadChildren: () => import('./Property/propertytypes/propertytypes.module').then(m => m.PropertytypesPageModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./Service/footer/footer.module').then(m => m.FooterPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./Service/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./Service/tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./Service/tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./Service/tab3/tab3.module').then(m => m.Tab3PageModule)
  },
  {
    path: 'filterproperty',
    loadChildren: () => import('./Property/filterproperty/filterproperty.module').then(m => m.FilterpropertyPageModule)
  },
  {
    path: 'shortlisted',
    loadChildren: () => import('./Property/shortlisted/shortlisted.module').then(m => m.ShortlistedPageModule)
  },
  {
    path: 'propertyhome',
    loadChildren: () => import('./Property/propertyhome/propertyhome.module').then(m => m.PropertyhomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./Property/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'daily',
    loadChildren: () => import('./Cabservice/daily/daily.module').then(m => m.DailyPageModule)
  },
  {
    path: 'rentals',
    loadChildren: () => import('./Cabservice/rentals/rentals.module').then(m => m.RentalsPageModule)
  },
  {
    path: 'outstation',
    loadChildren: () => import('./Cabservice/outstation/outstation.module').then(m => m.OutstationPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./Cabservice/modal/modal.module').then(m => m.ModalPageModule)
  },
  {
    path: 'confirmpickup',
    loadChildren: () => import('./Cabservice/confirmpickup/confirmpickup.module').then(m => m.ConfirmpickupPageModule)
  },
  {
    path: 'oldexdashboard',
    loadChildren: () => import('./Oldex/oldexdashboard/oldexdashboard.module').then(m => m.OldexdashboardPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./Oldex/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'propertydeatils',
    loadChildren: () => import('./Property/propertydeatils/propertydeatils.module').then(m => m.PropertydeatilsPageModule)
  },
  {
    path: 'productdetails',
    loadChildren: () => import('./Oldex/productdetails/productdetails.module').then(m => m.ProductdetailsPageModule)
  },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./Oldex/profile/profile.module').then(m => m.ProfilePageModule)
  // },
  {
    path: 'addfavorite',
    loadChildren: () => import('./Oldex/addfavorite/addfavorite.module').then(m => m.AddfavoritePageModule)
  },
  {
    path: 'productsell',
    loadChildren: () => import('./Oldex/productsell/productsell.module').then(m => m.ProductsellPageModule)
  },
  {
    path: 'myprofile',
    loadChildren: () => import('./Oldex/myprofile/myprofile.module').then(m => m.MyprofilePageModule)
  },
  {
    path: 'productinfo',
    loadChildren: () => import('./Oldex/productinfo/productinfo.module').then(m => m.ProductinfoPageModule)
  },
  {
    path: 'ridedetails',
    loadChildren: () => import('./Cabservice/ridedetails/ridedetails.module').then(m => m.RidedetailsPageModule)
  },




  // {
  //   path: 'filter',
  //   loadChildren: () => import('./Property/filter/filter.module').then(m => m.FilterPageModule)
  // },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
