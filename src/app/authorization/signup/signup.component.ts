import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthorizationService) { }

  ngOnInit() {
  }

  onSignup(signupForm: NgForm){
    const email = signupForm.value.email;
    const password = signupForm.value.password;
    this.authService.signupUser(email, password);
  }
}
