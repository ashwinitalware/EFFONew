import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.page.html',
  styleUrls: ['./joblist.page.scss'],
})
export class JoblistPage implements OnInit {
  constructor(
    public activatedRoute: ActivatedRoute,
    public jobService: JobService,
    public navCtrl: NavController
  ) {
    this.jobService.getAllJobs(
      this.activatedRoute.snapshot.params.categoryIdOrQuery
    );
  }

  ngOnInit() {}
  jobDetails(job) {
    this.navCtrl.navigateForward(['/jobdetails/' + job.id]);
  }
}
