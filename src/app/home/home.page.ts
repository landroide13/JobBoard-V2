import { Component } from '@angular/core';
import { JobService } from '../services/job.service';
import { Job } from '../models/Job.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  jobs: Job[] = [];
  listJob: Job[] = [];

  constructor(private jobServ: JobService) {}

  ngOnInit(){
    this.jobs = this.jobServ.jobs;
  }

  onFilterUpdate(e: Event){

  }


}
