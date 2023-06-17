import { VariableBinding } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from 'src/app/Models/user';
import { HeroService } from 'src/app/service/hero.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private hero:HeroService) { }

imagePath:any;
  login(id:number){
    return this.hero.id=id;
  }
  setId(id:number):Observable<number>{
    return this.hero.setId(id)
  }


  getUser(id:number):Observable<User>{
    return this.hero.getById('users',id);
  }

  addUser(data:User):Observable<any>{
  return this.hero.addData('users',data);
  }
}
