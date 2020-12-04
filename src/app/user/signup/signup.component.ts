import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { rePasswordValidatorFactory } from 'src/app/shared/validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    const passwordControl = this.fb.control('',[Validators.required, Validators.minLength(4)]);
    this.form = this.fb.group({
      username:['', [Validators.required, Validators.minLength(5)]],
      email:['',[Validators.required, Validators.email]],
      password: passwordControl,
      rePassword:['',Validators.required, Validators.minLength(4), rePasswordValidatorFactory(passwordControl)]
    });
   }

  ngOnInit(): void {
  }

  submitHandler(): void{
    const data = this.form.value;
    console.log(data);
    
      //to be implemented userservice
  }

}
