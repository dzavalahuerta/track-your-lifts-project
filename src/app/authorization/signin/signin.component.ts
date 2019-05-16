import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthorizationService) { }

  ngOnInit() {
  }

  onSignin(signinForm: NgForm){
    const email = signinForm.value.email;
    const password = signinForm.value.password;
    this.authService.signinUser(email, password);
  }
}
