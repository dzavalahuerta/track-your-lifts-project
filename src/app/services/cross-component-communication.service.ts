import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CrossComponentCommunicationService {
  signinRouteCondition = new Subject();
  signupRouteCondition = new Subject();
  homeRouteCondition = new Subject();
  constructor() { }


  homeRouteConditionMethod(){
    this.homeRouteCondition.next(true);
  }
  signinRouteConditionMethod(){
    this.signinRouteCondition.next(true);
  }
  signupRouteConditionMethod(){
    this.signupRouteCondition.next(true);
  }
}
