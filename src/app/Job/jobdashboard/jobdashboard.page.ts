import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-jobdashboard',
  templateUrl: './jobdashboard.page.html',
  styleUrls: ['./jobdashboard.page.scss'],
})
export class JobdashboardPage implements OnInit {
  temp = 'IT Industry';
  // New Jobs Near Me

  sections = [
    {
      title: 'New Jobs',
      subtitle: 'Handpicked jobs by our experts especially for you',
      color: 'black',
      jobs: [],
    },
    {
      title: 'Jobs Near Me',
      subtitle: 'Nearby Jobs On EFFO App',
      color: 'blue',
      jobs: [],
    },
    {
      title: 'High Salary Jobs',
      subtitle: 'High salary jobs in your desired category',
      color: 'green',
      jobs: [],
    },
  ];
  // bookride = false;
  showAll = false;
  selectedLeave = '';

  // book_ride() {
  //   this.bookride = true;
  // }

  slideOptss = {
    slidesPerView: 1.5,
  };

  switchTab = 'job';
  constructor(
    public jobService: JobService,
    public router: Router,
    public navCtrl: NavController,
    public http: HttpClient,
    public dataService: DataService
  ) {
    this.jobService.getCategories();
    this.getNewJobs();
    this.getNearJobs();
    this.getHighSalaryJobs();
  }
  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
    console.log('Segment changed', ev);
  }

  getNewJobs() {
    this.http
      .get(this.dataService.apiUrl + 'job-posts', {
        params: {
          sort: 'createdAt:desc',
        },
      })
      .subscribe((data: any) => {
        this.sections[0].jobs = data.data;
      });
  }
  getNearJobs() {
    this.http
      .get(this.dataService.apiUrl + 'job-posts', {
        params: {
          'filters[city][$eq]': this.dataService.profile.city,
        },
      })
      .subscribe((data: any) => {
        this.sections[1].jobs = data.data;
      });
  }
  getHighSalaryJobs() {
    this.http
      .get(this.dataService.apiUrl + 'job-posts', {
        params: {
          sort: 'salaryUpto:desc',
        },
      })
      .subscribe((data: any) => {
        this.sections[2].jobs = data.data;
      });
  }

  // slideChanged() {
  //   this.slider.stopAutoplay();
  // }

  ngOnInit() {}
  jobDetails(job) {
    this.navCtrl.navigateForward(['/jobdetails/' + job.id]);
  }
}
