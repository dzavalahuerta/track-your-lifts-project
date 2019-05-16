import { Component, OnInit } from '@angular/core';
import { CrossComponentCommunicationService } from './services/cross-component-communication.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  signupCondition = false;
  signinCondition = false;

  constructor(private cccService: CrossComponentCommunicationService){ }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: 'AIzaSyDzshkjHlEC4Z99JpPA37FmgyDcBAZDCec',
      authDomain: 'track-your-lifts-project.firebaseapp.com'
    });

    this.cccService.signupRouteCondition
      .subscribe(
        (condition: boolean)=>{
          this.signinCondition = false;
          this.signupCondition = condition;
        }
      );

    this.cccService.signinRouteCondition
      .subscribe(
        (condition: boolean)=>{
          this.signupCondition = false;
          this.signinCondition = condition;
        }
      );
  }
}
