import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
declare const Swal: any;

@Component({
  selector: 'app-apply',
  templateUrl: './apply.page.html',
  styleUrls: ['./apply.page.scss'],
})
export class ApplyPage implements OnInit {
  jobApplied;
  constructor(
    public navCtrl: NavController,
    public router: Router,
    public http: HttpClient,
    public dataService: DataService,
    public activatedRoute: ActivatedRoute
  ) {
    this.jobAppliedCheck();
  }

  ngOnInit() {}

  confirmOrder() {
    const swalWithBootstrapButtons = Swal.mixin({});
    swalWithBootstrapButtons.fire({
      title: 'Successfully Applied',
      text: '',
      timer: 3000,
      icon: 'success',
    });
    // this.router.navigate(['/login']);
  }

  jobAppliedCheck() {
    //asdf
    // const query = qs.stringify({
    //   populate: '*',
    // });
    this.http
      .get(this.dataService.apiUrl + 'job-applications', {
        params: {
          'filters[applicant][id][$eq]': this.dataService.profile.id + '',
          'filters[jobPost][id][$eq]':
            this.activatedRoute.snapshot.params.jobId + '',
          populate: '*',
        },
      })
      .subscribe((data: any) => {
        this.jobApplied = data.data.length ? true : false;
      });
  }
  apply() {
    if (this.jobApplied) {
      return;
    }
    if (this.jobApplied === false) {
      this.http
        .post(this.dataService.apiUrl + 'job-applications', {
          data: {
            applicant: this.dataService.profile.id + '',
            jobPost: this.activatedRoute.snapshot.params.jobId + '',
          },
        })
        .subscribe((data) => {
          this.jobApplied = true;
          this.navCtrl.back();
          this.dataService.swal(
            'Job Applied',
            'You will see job status in history',
            'success'
          );
        });
    }
  }
}
