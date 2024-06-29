import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AlertController} from "@ionic/angular";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(form: NgForm){
    console.log(form);
    if(form.valid){
    this.authService.login(form.value).subscribe(resData=> {
      console.log("Prijava uspesna");
      console.log(resData)
      this.router.navigateByUrl("/");
    },

  
  );
  }

  }

  toRegister(){
    this.router.navigateByUrl('register')
  }
}
