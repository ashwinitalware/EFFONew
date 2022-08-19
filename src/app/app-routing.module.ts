import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { CartGuard } from './guards/shopping/cart.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    // redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then((m) => m.OtpPageModule),
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('./signin/signin.module').then((m) => m.SigninPageModule),
  },
  {
    path: 'dashboard',
    // canDeactivate: [LoginGuard],
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardPageModule),
  },
  {
    path: 'jobdashboard',
    loadChildren: () =>
      import('./Job/jobdashboard/jobdashboard.module').then(
        (m) => m.JobdashboardPageModule
      ),
  },
  {
    path: 'alljoblist',
    loadChildren: () =>
      import('./Job/alljoblist/alljoblist.module').then(
        (m) => m.AlljoblistPageModule
      ),
  },
  {
    path: 'jobdetails/:jobId',
    loadChildren: () =>
      import('./Job/jobdetails/jobdetails.module').then(
        (m) => m.JobdetailsPageModule
      ),
  },
  {
    path: 'allcategories',
    loadChildren: () =>
      import('./allcategories/allcategories.module').then(
        (m) => m.AllcategoriesPageModule
      ),
  },
  {
    path: 'fulltime-job',
    loadChildren: () =>
      import('./Job/fulltime-job/fulltime-job.module').then(
        (m) => m.FulltimeJobPageModule
      ),
  },
  {
    path: 'parttime-job',
    loadChildren: () =>
      import('./Job/parttime-job/parttime-job.module').then(
        (m) => m.ParttimeJobPageModule
      ),
  },
  {
    path: 'workfromhome-job',
    loadChildren: () =>
      import('./Job/workfromhome-job/workfromhome-job.module').then(
        (m) => m.WorkfromhomeJobPageModule
      ),
  },
  {
    path: 'workabroad-job',
    loadChildren: () =>
      import('./Job/workabroad-job/workabroad-job.module').then(
        (m) => m.WorkabroadJobPageModule
      ),
  },
  {
    path: 'newsdashboard',
    loadChildren: () =>
      import('./News/newsdashboard/newsdashboard.module').then(
        (m) => m.NewsdashboardPageModule
      ),
  },
  {
    path: 'topnewsdeatils',
    loadChildren: () =>
      import('./News/topnewsdeatils/topnewsdeatils.module').then(
        (m) => m.TopnewsdeatilsPageModule
      ),
  },
  {
    path: 'discover',
    loadChildren: () =>
      import('./News/discover/discover.module').then(
        (m) => m.DiscoverPageModule
      ),
  },
  {
    path: 'accounts',
    loadChildren: () =>
      import('./Job/accounts/accounts.module').then(
        (m) => m.AccountsPageModule
      ),
  },
  {
    path: 'marketing',
    loadChildren: () =>
      import('./Job/marketing/marketing.module').then(
        (m) => m.MarketingPageModule
      ),
  },
  {
    path: 'itindustry',
    loadChildren: () =>
      import('./Job/itindustry/itindustry.module').then(
        (m) => m.ItindustryPageModule
      ),
  },
  {
    path: 'backoffice',
    loadChildren: () =>
      import('./Job/backoffice/backoffice.module').then(
        (m) => m.BackofficePageModule
      ),
  },
  {
    path: 'bpo',
    loadChildren: () =>
      import('./Job/bpo/bpo.module').then((m) => m.BpoPageModule),
  },
  {
    path: 'deliveryboy',
    loadChildren: () =>
      import('./Job/deliveryboy/deliveryboy.module').then(
        (m) => m.DeliveryboyPageModule
      ),
  },
  {
    path: 'teachers',
    loadChildren: () =>
      import('./Job/teachers/teachers.module').then(
        (m) => m.TeachersPageModule
      ),
  },
  {
    path: 'beautician',
    loadChildren: () =>
      import('./Job/beautician/beautician.module').then(
        (m) => m.BeauticianPageModule
      ),
  },
  {
    path: 'apply/:jobId',
    loadChildren: () =>
      import('./apply/apply.module').then((m) => m.ApplyPageModule),
  },
  {
    path: 'empdashboard',
    loadChildren: () =>
      import('./Employer/empdashboard/empdashboard.module').then(
        (m) => m.EmpdashboardPageModule
      ),
  },
  {
    path: 'filters',
    loadChildren: () =>
      import('./Job/filters/filters.module').then((m) => m.FiltersPageModule),
  },
  {
    path: 'softwaredeveloper',
    loadChildren: () =>
      import('./Job/softwaredeveloper/softwaredeveloper.module').then(
        (m) => m.SoftwaredeveloperPageModule
      ),
  },
  {
    path: 'software-deatils',
    loadChildren: () =>
      import('./Job/software-deatils/software-deatils.module').then(
        (m) => m.SoftwareDeatilsPageModule
      ),
  },
  {
    path: 'joblist',
    loadChildren: () =>
      import('./Job/joblist/joblist.module').then((m) => m.JoblistPageModule),
  },
  {
    path: 'joblist/:categoryIdOrQuery',
    loadChildren: () =>
      import('./Job/joblist/joblist.module').then((m) => m.JoblistPageModule),
  },
  {
    path: 'joblist/:categoryIdOrQuery/:city',
    loadChildren: () =>
      import('./Job/joblist/joblist.module').then((m) => m.JoblistPageModule),
  },
  // {
  //   path: 'history',
  //   loadChildren: () =>
  //     import('./Job/history/history.module').then((m) => m.HistoryPageModule),
  // },
  {
    path: 'profile',
    loadChildren: () =>
      import('./Job/profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'editprofile',
    loadChildren: () =>
      import('./Job/editprofile/editprofile.module').then(
        (m) => m.EditprofilePageModule
      ),
  },
  {
    path: 'forgotpass',
    loadChildren: () =>
      import('./Job/forgotpass/forgotpass.module').then(
        (m) => m.ForgotpassPageModule
      ),
  },
  {
    path: 'verify',
    loadChildren: () =>
      import('./Job/verify/verify.module').then((m) => m.VerifyPageModule),
  },
  {
    path: 'newpassword',
    loadChildren: () =>
      import('./Job/newpassword/newpassword.module').then(
        (m) => m.NewpasswordPageModule
      ),
  },
  {
    path: 'notification',
    loadChildren: () =>
      import('./Job/notification/notification.module').then(
        (m) => m.NotificationPageModule
      ),
  },
  {
    path: 'contactus',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactPageModule),
  },
  {
    path: 'privacypolicy',
    loadChildren: () =>
      import('./privacypolicy/privacypolicy.module').then(
        (m) => m.PrivacypolicyPageModule
      ),
  },
  {
    path: 'confirmationpopup',
    loadChildren: () =>
      import('./Job/confirmationpopup/confirmationpopup.module').then(
        (m) => m.ConfirmationpopupPageModule
      ),
  },
  // {
  //   path: 'job-home',
  //   loadChildren: () =>
  //     import('./job/job-home/job-home.module').then((m) => m.JobHomePageModule),
  // },
  {
    path: 'service-dashboard',
    loadChildren: () =>
      import('./services/service-dashboard/service-dashboard.module').then(
        (m) => m.ServiceDashboardPageModule
      ),
  },
  {
    path: 'oldex-dashboard',
    loadChildren: () =>
      import('./oldex/oldex-dashboard/oldex-dashboard.module').then(
        (m) => m.OldexDashboardPageModule
      ),
  },
  {
    path: 'service-home',
    loadChildren: () =>
      import('./services/service-home/service-home.module').then(
        (m) => m.ServiceHomePageModule
      ),
  },
  {
    path: 'service-bookings',
    loadChildren: () =>
      import('./services/service-bookings/service-bookings.module').then(
        (m) => m.ServiceBookingsPageModule
      ),
  },
  {
    path: 'service-subcategories/:categoryId',
    loadChildren: () =>
      import(
        './services/service-subcategories/service-subcategories.module'
      ).then((m) => m.ServiceSubcategoriesPageModule),
  },
  {
    path: 'vendor-listing/:subcategoryId',
    loadChildren: () =>
      import('./services/vendor-listing/vendor-listing.module').then(
        (m) => m.VendorListingPageModule
      ),
  },
  {
    path: 'vendor-details/:id',
    loadChildren: () =>
      import('./services/vendor-details/vendor-details.module').then(
        (m) => m.VendorDetailsPageModule
      ),
  },
  {
    path: 'service-history',
    loadChildren: () =>
      import('./services/service-history/service-history.module').then(
        (m) => m.ServiceHistoryPageModule
      ),
  },
  {
    path: 'booking-details/:id',
    loadChildren: () =>
      import('./services/booking-details/booking-details.module').then(
        (m) => m.BookingDetailsPageModule
      ),
  },
  {
    path: 'shopping-dashboard',
    loadChildren: () =>
      import('./shopping/shopping-dashboard/shopping-dashboard.module').then(
        (m) => m.ShoppingDashboardPageModule
      ),
  },
  {
    path: 'shopping-home',
    loadChildren: () =>
      import('./shopping/shopping-home/shopping-home.module').then(
        (m) => m.ShoppingHomePageModule
      ),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./shopping/orders/orders.module').then((m) => m.OrdersPageModule),
  },
  {
    path: 'shopping-orders',
    loadChildren: () =>
      import('./shopping/shopping-orders/shopping-orders.module').then(
        (m) => m.ShoppingOrdersPageModule
      ),
  },
  {
    path: 'shopping-settings',
    loadChildren: () =>
      import('./shopping/shopping-settings/shopping-settings.module').then(
        (m) => m.ShoppingSettingsPageModule
      ),
  },
  {
    path: 'shopping-vendor-listing',
    loadChildren: () =>
      import(
        './shopping/shopping-vendor-listing/shopping-vendor-listing.module'
      ).then((m) => m.ShoppingVendorListingPageModule),
  },
  {
    path: 'shopping-vendor-menu/:id',
    loadChildren: () =>
      import(
        './shopping/shopping-vendor-menu/shopping-vendor-menu.module'
      ).then((m) => m.ShoppingVendorMenuPageModule),
  },
  {
    path: 'shopping-cart',
    loadChildren: () =>
      import('./shopping/shopping-cart/shopping-cart.module').then(
        (m) => m.ShoppingCartPageModule
      ),
    canActivate: [CartGuard],
    // loadChildren: () =>
    //   import('./shopping/shopping-cart/shopping-cart.module').then(
    //     (m) => m.ShoppingCartPageModule
    //   ),
  },
  {
    path: 'property-dashboard',
    loadChildren: () =>
      import('./property/property-dashboard/property-dashboard.module').then(
        (m) => m.PropertyDashboardPageModule
      ),
  },
  {
    path: 'property-home',
    loadChildren: () =>
      import('./property/property-home/property-home.module').then(
        (m) => m.PropertyHomePageModule
      ),
  },
  {
    path: 'property-shortlist',
    loadChildren: () =>
      import('./property/property-shortlist/property-shortlist.module').then(
        (m) => m.PropertyShortlistPageModule
      ),
  },
  {
    path: 'property-own-list',
    loadChildren: () =>
      import('./property/property-own-list/property-own-list.module').then(
        (m) => m.PropertyOwnListPageModule
      ),
  },
  {
    path: 'property-add',
    loadChildren: () =>
      import('./property/property-add/property-add.module').then(
        (m) => m.PropertyAddPageModule
      ),
  },
  {
    path: 'property-add/:id',
    loadChildren: () =>
      import('./property/property-add/property-add.module').then(
        (m) => m.PropertyAddPageModule
      ),
  },
  {
    path: 'property-list',
    loadChildren: () =>
      import('./property/property-list/property-list.module').then(
        (m) => m.PropertyListPageModule
      ),
  },
  {
    path: 'property-details/:id',
    loadChildren: () =>
      import('./property/property-details/property-details.module').then(
        (m) => m.PropertyDetailsPageModule
      ),
  },
  {
    path: 'add-old-product',
    loadChildren: () =>
      import('./oldex/add-old-product/add-old-product.module').then(
        (m) => m.AddOldProductPageModule
      ),
  },
  {
    path: 'add-old-product/:id',
    loadChildren: () =>
      import('./oldex/add-old-product/add-old-product.module').then(
        (m) => m.AddOldProductPageModule
      ),
  },
  {
    path: 'oldex-home',
    loadChildren: () =>
      import('./oldex/oldex-home/oldex-home.module').then(
        (m) => m.OldexHomePageModule
      ),
  },
  {
    path: 'oldex-my-products',
    loadChildren: () =>
      import('./oldex/oldex-my-products/oldex-my-products.module').then(
        (m) => m.OldexMyProductsPageModule
      ),
  },
  {
    path: 'oldex-details/:id',
    loadChildren: () =>
      import('./oldex/oldex-details/oldex-details.module').then(
        (m) => m.OldexDetailsPageModule
      ),
  },
  {
    path: 'oldex-listing',
    loadChildren: () =>
      import('./oldex/oldex-listing/oldex-listing.module').then(
        (m) => m.OldexListingPageModule
      ),
  },
  {
    path: 'shoping-add-cart-modal',
    loadChildren: () =>
      import(
        './shopping/modals/shoping-add-cart-modal/shoping-add-cart-modal.module'
      ).then((m) => m.ShopingAddCartModalPageModule),
  },
  {
    path: 'shopping-history/:id',
    loadChildren: () =>
      import('./shopping/shopping-history/shopping-history.module').then(
        (m) => m.ShoppingHistoryPageModule
      ),
  },
  {
    path: 'shopping-order-details/:orderId',
    loadChildren: () =>
      import(
        './shopping/shopping-order-details/shopping-order-details.module'
      ).then((m) => m.ShoppingOrderDetailsPageModule),
  },
  {
    path: 'vendor-by-category/:id/:name',
    loadChildren: () =>
      import('./shopping/vendor-by-category/vendor-by-category.module').then(
        (m) => m.VendorByCategoryPageModule
      ),
  },
  {
    path: 'cab-home',
    loadChildren: () =>
      import('./cab-home/cab-home.module').then((m) => m.CabHomePageModule),
  },
  {
    path: 'cab-cities',
    loadChildren: () =>
      import('./cab/cab-cities/cab-cities.module').then(
        (m) => m.CabCitiesPageModule
      ),
  },
  {
    path: 'cab-confirm-booking',
    loadChildren: () =>
      import('./cab/cab-confirm-booking/cab-confirm-booking.module').then(
        (m) => m.CabConfirmBookingPageModule
      ),
  },
  {
    path: 'cab-history',
    loadChildren: () =>
      import('./cab/cab-history/cab-history.module').then(
        (m) => m.CabHistoryPageModule
      ),
  },
  {
    path: 'cab-tabs',
    loadChildren: () =>
      import('./cab/cab-tabs/cab-tabs.module').then((m) => m.CabTabsPageModule),
  },
  {
    path: 'cab-history-details/:id',
    loadChildren: () =>
      import('./cab/cab-history-details/cab-history-details.module').then(
        (m) => m.CabHistoryDetailsPageModule
      ),
  },
  {
    path: 'track/:rideId',
    loadChildren: () =>
      import('./cab/track/track.module').then((m) => m.TrackPageModule),
  },
  {
    path: 'lodging-dashboard',
    loadChildren: () =>
      import('./lodging-dashboard/lodging-dashboard.module').then(
        (m) => m.LodgingDashboardPageModule
      ),
  },
  {
    path: 'lodging-home',
    loadChildren: () =>
      import('./lodging-home/lodging-home.module').then(
        (m) => m.LodgingHomePageModule
      ),
  },
  {
    path: 'lodging-bookings',
    loadChildren: () =>
      import('./lodging-bookings/lodging-bookings.module').then(
        (m) => m.LodgingBookingsPageModule
      ),
  },
  {
    path: 'lodging-listing',
    loadChildren: () =>
      import('./lodging-listing/lodging-listing.module').then(
        (m) => m.LodgingListingPageModule
      ),
  },
  {
    path: 'lodging-details/:lodgeId',
    loadChildren: () =>
      import('./lodging-details/lodging-details.module').then(
        (m) => m.LodgingDetailsPageModule
      ),
  },
  {
    path: 'lodging-bookings-details/:bookingId',
    loadChildren: () =>
      import('./lodging-bookings-details/lodging-bookings-details.module').then(
        (m) => m.LodgingBookingsDetailsPageModule
      ),
  },
  {
    path: 'restaurant-dashboard',
    loadChildren: () =>
      import(
        './restaurant/restaurant-dashboard/restaurant-dashboard.module'
      ).then((m) => m.RestaurantDashboardPageModule),
  },
  {
    path: 'restaurant-orders',
    loadChildren: () =>
      import('./restaurant/restaurant-orders/restaurant-orders.module').then(
        (m) => m.RestaurantOrdersPageModule
      ),
  },
  {
    path: 'restaurant-home',
    loadChildren: () =>
      import('./restaurant/restaurant-home/restaurant-home.module').then(
        (m) => m.RestaurantHomePageModule
      ),
  },
  {
    path: 'restaurant-menu/:id',
    loadChildren: () =>
      import('./restaurant/restaurant-menu/restaurant-menu.module').then(
        (m) => m.RestaurantMenuPageModule
      ),
  },
  {
    path: 'restaurant-cart',
    loadChildren: () =>
      import('./restaurant/restaurant-cart/restaurant-cart.module').then(
        (m) => m.RestaurantCartPageModule
      ),
  },
  {
    path: 'restaurant-order-details/:orderId',
    loadChildren: () =>
      import(
        './restaurant/restaurant-order-details/restaurant-order-details.module'
      ).then((m) => m.RestaurantOrderDetailsPageModule),
  },

  // {
  //   path: 'job-profile',
  //   loadChildren: () => import('./job/job-profile/job-profile.module').then( m => m.JobProfilePageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
