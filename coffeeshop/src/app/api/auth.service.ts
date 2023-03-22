import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn : boolean = false

  login(){

    this.loggedIn = true
  }
  IsAuthenticated(){

    if(sessionStorage.getItem('logginToken') != null)
    {
      return true;
    }
    else{
      return false;

    }
   //return this.loggedIn ;
  }
  
}
