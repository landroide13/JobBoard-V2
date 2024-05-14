import { Component } from '@angular/core';
import { JobService } from '../services/job.service';
import { Job } from '../models/Job.model';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

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
    this.generateItems();
  }

  private generateItems() {
    const count = this.listJob.length + 1;
    for (let i = 0; i < 50; i++) {
      this.listJob.push(this.jobs[count + i]);
    }
  }

  onIonInfinite(event: Event){
    this.generateItems();
    setTimeout(() => {
      (event as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }


}
