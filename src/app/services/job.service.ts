import { Injectable } from '@angular/core';
import { Job } from '../models/Job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

 private _jobs: Job[] = [
   new Job(
      'j1',
      'Ionic Developer',
      'Develop Ionic and Angular Applications',
      'New York City',
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0",
      'Bachelor or MS Informatic Degree. ',
      'Develop Aplications along with the mantenance of legacy code.',
      'Dice'
   ),
   new Job(
    'j2',
    'Angular Developer',
    'Develop Ionic and Angular Applications',
    'New York City',
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0",
    'Bachelor or MS Informatic Degree. ',
    'Develop Aplications along with the mantenance of legacy code.',
    'Dice'
  ),
  new Job(
    'j3',
    'Ionic Developer',
    'Develop Ionic and Angular Applications',
    'New York City',
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0",
    'Bachelor or MS Informatic Degree. ',
    'Develop Aplications along with the mantenance of legacy code.',
    'Dice'
  ),
  new Job(
    'j4',
    'Ionic Developer',
    'Develop Ionic and Angular Applications',
    'New York City',
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0",
    'Bachelor or MS Informatic Degree. ',
    'Develop Aplications along with the mantenance of legacy code.',
    'Dice'
  ),

 ]

 get jobs(){
  return [...this._jobs]
 }

 getJob(id: string){
    return {...this._jobs.find(job => job.id === id)}
 }

  constructor() { }




}
