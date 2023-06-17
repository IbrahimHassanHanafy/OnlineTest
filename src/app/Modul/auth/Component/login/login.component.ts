import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { User } from 'src/app/Models/user';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private http: HttpClient,
    private hero:HeroService
  ) { }
  ngOnDestroy(): void {
    if(this.id!=0)
    {console.log("id in login destroy"+this.id)
  this.hero.setId(this.id);
  
  }
  }
  passError: boolean = false;
  emailError: boolean = false;
  _URL: string = 'http://localhost:3500/users';
  id: number = 0;
  loginForm = this.fb.group({
    role: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(/^\w{3,}@\w{3,}.com$/)]],
    password: ['', [Validators.required, Validators.pattern(/^[A-Z]{1}\w{7,}/)]]
  })
  get email() {
    return this.loginForm.get('email') as FormControl;
  }
  get password() {
    return this.loginForm.get('password') as FormControl;
  }
  get role() {
    return this.loginForm.get('role') as FormControl;
  }


  btnLogin(ev: Event) {
    ev.preventDefault();
    this.http.get<User[]>(
      `${this._URL}?role=${this.role.value}&email=${this.email.value}`)
      .subscribe(
        res => {
          if (res.length != 0) {
            this.id = res[0].id;
            // this.emailError = false;
            if (res[0].password == this.password.value) {
              // this.passError = false;
              this.route.navigateByUrl('/home')
            } else {
              this.passError = true;
            }
          } else {
            this.emailError = true;
            this.passError = false;
          }
        })
  }
}
