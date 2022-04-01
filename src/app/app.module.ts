import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicSelectableModule } from 'ionic-selectable';
import { JobService } from './services/job.service';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { LoginGuard } from './guards/login.guard';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { SmsRetriever } from '@awesome-cordova-plugins/sms-retriever/ngx';
import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicSelectableModule,
  ],
  providers: [
    PhotoViewer,
    SmsRetriever,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    JobService,
    DataService,
    InAppBrowser,
    LoginGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
