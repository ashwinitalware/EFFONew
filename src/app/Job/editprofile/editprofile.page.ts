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
  }

  ngOnInit() {}
  updateProfile() {
    this.http
      .put(this.dataService.apiUrl + 'custom/updateProfile', {
        id: this.dataService.profile.id,
        fullName: this.dataService.profile.fullName,
        city: this.dataService.profile.city,
        email: this.dataService.profile.email,
      })
      .subscribe((data: any) => {
        if (data.status) {
          this.dataService.swal('Profile Updated', '', 'success');
        }
        if (data.profile) {
          this.dataService.saveProfileObject(data.profile);
        }
        // '/' + this.activateRoute.snapshot.queryParams.navigate,
        if (this.activateRoute.snapshot.queryParams.navigate == 'back') {
          this.navCtrl.back();
        } else {
          this.navCtrl.navigateRoot(['/dashboard']);
        }
        // if (this.activateRoute.snapshot.queryParams.navigate) {
        //   this.router.navigate([
        //     '/' + this.activateRoute.snapshot.queryParams.navigate,
        //   ]);
        // }
      });
  }
}
