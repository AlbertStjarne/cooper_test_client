import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { CooperProvider } from '../cooper/cooper';
import { NavController } from '../../../node_modules/ionic-angular/umd';

@Injectable()
export class PersonProvider {
public gender: string;
public age: number;
public assessmentMessage: string;
user: any;

constructor(private cooper: CooperProvider) {}

doAssessment(distance: number): void {
  this.assessmentMessage = this.cooper.assess(this, distance);
  }

}