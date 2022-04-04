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
  fileToUpload: File | null = null;

  // resumeUploaded=false
  resumeText = 'Upload Resume (.pdf)';
  profile;
  constructor(
    public navCtrl: NavController,
    public router: Router,
    public http: HttpClient,
    public dataService: DataService,
    public activatedRoute: ActivatedRoute
  ) {
    this.jobAppliedCheck();
    this.checkForResumeExists();
  }

  checkForResumeExists() {
    this.http
      .get(this.dataService.apiUrl + 'users/' + this.dataService.profile.id)
      .subscribe((data: any) => {
        if (data.resume) {
          this.resumeText = 'Change Your Resume';
          this.dataService.profile = data;
          // this.resumeUploaded=true
        }
      });
  }
  handleFileInput(files: any) {
    console.log(files.target.files.item(0));
    // check file extension
    if (files.target.files.item(0).name.split('.').pop() != 'pdf') {
      this.dataService.presentToast('Only PDF file is allowed', 'danger');
      return;
    }
    if (files.target.files.item(0).size > 5000000) {
      this.dataService.presentToast('Max 5 mb can be uploaded');
      return;
    }

    this.fileToUpload = files.target.files.item(0);

    this.uploadFileToActivity();
  }
  uploadFileToActivity() {
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('files', this.fileToUpload, this.fileToUpload.name);
    this.dataService.present();
    return this.http
      .post(this.dataService.apiUrl + 'upload', formData)
      .subscribe((data: any) => {
        this.http
          .put(
            this.dataService.apiUrl + 'users/' + this.dataService.profile.id,
            {
              resume: data[0].url,
            }
          )
          .subscribe(
            (data2: any) => {
              this.dataService.presentToast('Resume Updated');
              this.dataService.dismiss();
              this.dataService.profile.resume = data2.resume;
            },
            (err) => {
              this.dataService.dismiss();
            }
          );
      });
  }
  ngOnInit() {}
  viewResume() {
    window.open(this.dataService.profile.resume, '_blank');
  }

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

    if (!this.dataService.profile.resume)
      return this.dataService.presentToast('Upload Resume First');

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
          this.dataService.confirmSwal('', 'Job Applied');
          // this.dataService.presentToast('Job Applied !');
        });
    }
  }
}
