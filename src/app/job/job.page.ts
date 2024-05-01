import { Component, OnInit } from '@angular/core';
import { Job } from '../models/Job.model';
import { JobService } from '../services/job.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-job',
  templateUrl: './job.page.html',
  styleUrls: ['./job.page.scss'],
})
export class JobPage implements OnInit {

  job!: Job;

  constructor(private jobServ: JobService, 
              private route: ActivatedRoute,
              private navCtr: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('jobId')){
        this.navCtr.navigateBack('/home');
        return
      }
      this.job = this.jobServ.getJob(paramMap.get('jobId')!)
    })
  }



}
