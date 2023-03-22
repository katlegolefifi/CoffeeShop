import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/api/user.service';
import jwt_decode from 'jwt-decode';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/api/auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login() {
    throw new Error('Method not implemented.');
    }
    loginForm = new FormGroup({

      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(40)])
     });
      decoded: any;

  constructor(private userService: UserService, private router: Router, private toastservice : NgToastService, private authService: AuthService ) { }

  ngOnInit(): void {
  }
  get f(){
    return this.loginForm.controls;
   }
  
   onSubmit(){
    this.authService.login();
    if(this.loginForm.controls.email && this.loginForm.controls.password){
  
    console.log(this.loginForm.value);
    this.userService.login(this.loginForm.value).subscribe((data:any)=>{
      this.decoded = jwt_decode(data.token)
      // console.log('Login successsfull');
      this.toastservice.success({detail:'Success', summary:'Successfully login!', sticky:false,position:'tr', duration:6000})
  
      this.router.navigate(['/home']);
      sessionStorage.setItem('logginToken', data.token)
      sessionStorage.setItem('loggedEmail', this.decoded.email);
  
    },(error)=>{
      this.toastservice.warning({detail: 'Warning', summary: 'Email or Password is invalid', sticky:false,position:'tr', duration:6000})
    }
    )
   }
  }
  
  
  

}
