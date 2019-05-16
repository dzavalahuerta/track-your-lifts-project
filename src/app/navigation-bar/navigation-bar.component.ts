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
  
  onHome(){
    this.cccService.homeRouteConditionMethod();
  }
  onSignin(){
    this.cccService.signinRouteConditionMethod();
  }
  onSignup(){
    this.cccService.signupRouteConditionMethod();
  }
}
