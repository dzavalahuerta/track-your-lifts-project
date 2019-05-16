import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CrossComponentCommunicationService {
  signupRouteCondition = new Subject();
  signinRouteCondition = new Subject();
  constructor() { }

  signupRouteConditionMethod(){
    this.signupRouteCondition.next(true);
  }
  signinRouteConditionMethod(){
    this.signinRouteCondition.next(true);
  }
}
