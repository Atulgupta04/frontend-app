import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    name : new FormControl('',[ Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  constructor(private fb1:FormBuilder, private router : Router, private apiService : ApiService) { }

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
        console.log(res)
      })
    }

  submit(){
    this.router.navigate(['/dashboard']) //your router URL need to pass it here
  }

  onSubmit(data1:any){
    console.log(this.loginForm.value);
    this.apiService.users(data1).subscribe((res: any)=>{
      this.apiService.users(this.loginForm)
      console.log(res)
    })

  }

}
