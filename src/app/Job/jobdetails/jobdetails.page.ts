import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { JobService } from 'src/app/services/job.service';
import * as qs from 'querystring';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.page.html',
  styleUrls: ['./jobdetails.page.scss'],
})
export class JobdetailsPage implements OnInit {
  //applied
  //not
  jobApplied;
  data;
  constructor(
    public dataService: DataService,
    public jobService: JobService,
    public http: HttpClient,
    public activatedRoute: ActivatedRoute
  ) {
    this.getJobDetails();
    this.jobAppliedCheck();
  }

  jobAppliedCheck() {
    //asdf
    const query = qs.stringify({
      populate: '*',
    });
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
            jobPost: this.data.id + '',
          },
        })
        .subscribe((data) => {
          this.jobApplied = true;
          this.dataService.swal(
            'Job Applied',
            'You will see job status in history',
            'success'
          );
        });
    }
  }
  getJobDetails() {
    //  +
    // this.activatedRoute.snapshot.params.jobId
    this.http
      .post(this.dataService.domainUrl + 'graphql', {
        query: `
          query{

            jobPosts (

              filters:{
                id:{
                  eq:${this.activatedRoute.snapshot.params.jobId}
                }
                # job_category:{
                #   id:{
                #     eq:1
                #   }
                # }
              }
            ){
              data{
                id
                attributes{

                  title
                  vacancies
                  address
                  salaryFrom
                  salaryUpto
                  minimumEducation
                  english
                  experience
                  description
                  timings
                  workingDays
                  job_post_skills{
                    data{
                     attributes{
                       name
                     }
                   }
                 }
                 author{
                  data{
                     attributes{
                      job_profile{
                        data{
                          attributes{
                             companyName

                          }
                        }
                      }
                    }
                  }
                }
                }
              }
            }

          }`,
      })
      .subscribe((data: any) => {
        this.data = data.data.jobPosts.data[0];
      });
  }

  ngOnInit() {}
}
