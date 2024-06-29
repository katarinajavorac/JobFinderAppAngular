import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-or-register',
  templateUrl: './login-or-register.page.html',
  styleUrls: ['./login-or-register.page.scss'],
})
export class LoginOrRegisterPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toLogin(){
    this.router.navigateByUrl('login');
  }

  toRegister(){
    this.router.navigateByUrl('register');
  }
}
