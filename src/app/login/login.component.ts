import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm1: FormGroup = new FormGroup({
  })

  constructor(private fb1:FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.loginForm1=this.fb1.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
    }

    )
  }

  loginuser(data:any){
    console.log(this.loginForm1.value)
  }

  submit(){
    this.router.navigate(['/dashboard']) //your router URL need to pass it here
  }

}
