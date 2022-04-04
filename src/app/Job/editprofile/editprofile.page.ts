import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  pinAddress = '';
  constructor(
    public dataService: DataService,
    public http: HttpClient,
    public router: Router,
    public navCtrl: NavController,
    public activateRoute: ActivatedRoute
  ) {
    console.log(this.activateRoute.snapshot);

    if (this.dataService.profile) {
      if (this.dataService.profile.email == 'email@gmail.com') {
        this.dataService.profile.email = '';
      }
    }

    if (!this.dataService.profile.pinCode) {
      this.dataService.profile.pinCode = '';
    }
  }

  checkPinCode() {
    this.http
      .get(
        'https://maps.googleapis.com/maps/api/geocode/json?address=' +
          this.dataService.profile.pinCode +
          '&sensor=true&key=AIzaSyD6d0aNvUiSWaENoQ1UuqCOzfMg0Wmq7Do'
      )
      .subscribe((data: any) => {
        if (data.results && data.results.length) {
          this.pinAddress = data.results[0].formatted_address;
          try {
            this.dataService.profile.city =
              data.results[0].address_components[1].long_name;
          } catch (error) {}
        } else {
          this.dataService.presentToast('Invalid Pin Code', 'danger');
          // alert('Invalid Pin Code');
        }
      });
  }
  ngOnInit() {}
  async updateProfile() {
    // check for validations
    let tempProfile = this.dataService.profile;
    if (
      !tempProfile.fullName ||
      !tempProfile.pinCode ||
      !tempProfile.city ||
      !tempProfile.email
    )
      return this.dataService.presentToast('Invalid Form', 'danger');

    if ((tempProfile.pinCode + '').length != 6)
      return this.dataService.presentToast('Invalid Pin Code', 'danger');

    if (!this.validateEmail(tempProfile.email))
      return this.dataService.presentToast('Invalid Email Address', 'danger');

    this.dataService.present();
    const pinResult: any = await this.http
      .get(
        'https://maps.googleapis.com/maps/api/geocode/json?address=' +
          this.dataService.profile.pinCode +
          '&sensor=true&key=AIzaSyD6d0aNvUiSWaENoQ1UuqCOzfMg0Wmq7Do'
      )
      .toPromise();

    this.dataService.dismiss();

    console.log(pinResult);

    if (pinResult.status != 'REQUEST_DENIED')
      if (!pinResult.results.length) {
        return this.dataService.presentToast('Invalid Pin Code', 'danger');
      }

    this.http
      .put(this.dataService.apiUrl + 'custom/updateProfile', {
        id: this.dataService.profile.id,
        fullName: this.dataService.profile.fullName,
        city: this.dataService.profile.city,
        email: this.dataService.profile.email,
        pinCode: this.dataService.profile.pinCode,
      })
      .subscribe((data: any) => {
        if (data.status) {
          this.dataService.confirmSwal('', 'Profile Updated');
        }
        if (data.profile) {
          this.dataService.saveProfileObject(data.profile);
        }
        if (this.activateRoute.snapshot.queryParams.navigate == 'back') {
          this.navCtrl.back();
        } else {
          this.navCtrl.navigateRoot(['/dashboard']);
        }
      });
  }

  validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        // eslint-disable-next-line max-len
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
}
