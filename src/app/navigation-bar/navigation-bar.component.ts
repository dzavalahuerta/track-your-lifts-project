import { Component, OnInit } from '@angular/core';
import { CrossComponentCommunicationService } from '../services/cross-component-communication.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private cccService: CrossComponentCommunicationService) { }

  ngOnInit() {
  }

  onSignup(){
    this.cccService.signupRouteConditionMethod();
  }
  onSignin(){
    this.cccService.signinRouteConditionMethod();
  }
}
