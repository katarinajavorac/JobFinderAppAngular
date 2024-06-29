import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

   registerForm!: FormGroup;
  constructor(private authService: AuthService,private router: Router) {

  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      //prvi argument u konstruktoru za formcontrol je default vrednost, drugi argument je validator
      name: new FormControl('Kristina', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(10)])
    });
  }

  onRegister(){
    console.log(this.registerForm);  //Ispis forme u konzoli radi provere
    this.authService.register(this.registerForm.value).subscribe(resData=> {
      console.log("Registracija uspela");
      console.log(resData);
      this.router.navigateByUrl("/login"); //kad se uspesno registruje ide direktno na login stranicu, 
    })
  }
  toLogin() {
    this.router.navigate(['/login']);
  }

}

