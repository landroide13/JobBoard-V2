import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/models/Job.model';

@Component({
  selector: 'app-cardjob',
  templateUrl: './cardjob.component.html',
  styleUrls: ['./cardjob.component.scss'],
})
export class CardjobComponent  implements OnInit {

  @Input() jobs!: Job[];

  constructor() { }

  ngOnInit() {}

}
