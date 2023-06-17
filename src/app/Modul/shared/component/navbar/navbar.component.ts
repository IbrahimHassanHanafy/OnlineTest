import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  iconClass:string='bi-person-fill-lock';
  loginData:string='login';
  image:string="assets/user.jpg"
  // constructor(private authService:AuthService) {

  // C:\fakepath\c1_auto_x2.jpg
  // }
   login(){
     this.loginData="Ibrahim@gmail.com"
     this.iconClass="bi-unlock-fill";
     this.image='assets/test.jpg';

  //   this.authService.login();
   }
   logout(){
    this.iconClass='bi-person-fill-lock';
    this.loginData='login';
    this.image="assets/user.jpg"
  //   this.authService.logOut();
  }
}
