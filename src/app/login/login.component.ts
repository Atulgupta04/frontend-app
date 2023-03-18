import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cookieToken: any ='';
  cookieMyToken: any = '';

  loginForm = new FormGroup({
    name : new FormControl('',[ Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  constructor(private fb1:FormBuilder, private router : Router, private apiService : ApiService, private cookieService: CookieService) { }

  ngOnInit(): void {
    // this.loginForm=this.fb1.group({
    //   name:['',[Validators.required,Validators.email]],
    //   password:['',[Validators.required,Validators.minLength(6)]],
    // }

    // )
  }

  get uservalidators(){
      return this.loginForm.get('user')
    }
  
    get passwordValidators(){
      return this.loginForm.get('password')
    }

    loginuser(data: any){
      this.apiService.users(data).subscribe((res:any)=>{
        this.apiService.users(data)
        console.log("login User: ",res)

        var today = new Date();
        var expire = new Date();
    
        expire.setTime(today.getTime() + 3600000*24*15);
        document.cookie = "name= " + res.Token + ";path=/" + ";expires=" + expire.toUTCString();
      })
    }

  submit(){
    this.router.navigate(['/dashboard']) //your router URL need to pass it here
  }

  onSubmit(data1:any){
    console.log(this.loginForm.value);
    this.apiService.users(data1).subscribe((res: any)=>{
      this.apiService.users(this.loginForm)
      console.log("login User: ", res)
      console.log("login User: ", res.token)

      this.cookieToken = this.cookieService.set(data1.name,res.token, );
      this.cookieMyToken = this.cookieToken;
      console.log(this.cookieMyToken);
    })

  }

}
