import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/api/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(40)]),
    repeatpassword: new FormControl('', [Validators.required])


    
  });

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  get f(){
    return this.registerForm.controls;
   }

   onSubmit(){
    console.log(this.registerForm.value);

    this.userService.registerUser(this.registerForm.value).subscribe((data:any)=>{
      console.log('user added');

      this.router.navigate(['/login']);
      
    })

    

   }

}
