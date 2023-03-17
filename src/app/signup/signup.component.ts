import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    company: new FormControl('')
  });
 
  // registerForm = new FormGroup({
  //   username: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   company: new FormControl('')
  // })


  constructor(private fb: FormBuilder, private router : Router) { }
  
  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        company: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(40)
          ]
        ]
    
  })
}


  onSubmit(data:any){
    console.log(this.registerForm.value);
    console.log(this.registerForm.controls['username'].value);
  }

  submit(){
    this.router.navigate(['/dashboard']) //your router URL need to pass it here
  }

 
}
