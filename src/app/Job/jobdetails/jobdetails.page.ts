import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.page.html',
  styleUrls: ['./jobdetails.page.scss'],
})
export class JobdetailsPage implements OnInit {
  data;
  constructor(
    public dataService: DataService,
    public jobService: JobService,
    public http: HttpClient,
    public activatedRoute: ActivatedRoute
  ) {
    this.getJobDetails();
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
                attributes{
                  title
                  vacancies
                  address
                  salaryFrom
                  salaryUpto
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
