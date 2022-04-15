import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-service-bookings',
  templateUrl: './service-bookings.page.html',
  styleUrls: ['./service-bookings.page.scss'],
})
export class ServiceBookingsPage implements OnInit {
  form: FormGroup;
  constructor(
    public dataService: DataService,
    public http: HttpClient,
    public service: ServiceService,
    public navCtrl: NavController
  ) {
    this.form = new FormGroup({
      description: new FormControl('', Validators.required),
      dateTime: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}
  book() {
    this.dataService.present('Booking...');
    console.log(this.service.selectedServices);

    if (this.form.invalid) return this.dataService.presentToast('Invalid Form');

    let services = [];
    this.service.selectedServices.forEach((service) => {
      services.push(service.id);
    });

    this.http
      .post(this.dataService.apiUrl + 'service-bookings', {
        data: {
          vendor: this.service.selectedVendorId + '',
          user: this.dataService.profile.id + '',
          services,
          dateTime: this.form.value.dateTime,
          address: this.form.value.address,
          description: this.form.value.description,
        },
      })
      .subscribe(
        (data) => {
          this.dataService.dismiss();
          this.dataService.confirmSwal('', 'Booking Done !');
          this.navCtrl.navigateForward(['/service-dashboard/history']);
        },
        (err) => {
          this.dataService.dismiss();
          alert('Connection Error, Please contact our support team ');
        }
      );
  }
}
