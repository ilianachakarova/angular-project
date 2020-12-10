import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';
import { rePasswordValidatorFactory } from 'src/app/shared/validators';
import { SignUpRequestPayload} from './signup-request-payload';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  signupRequestPayload: SignUpRequestPayload;
  

  constructor(private router: Router, private fb: FormBuilder,
     private authService: AuthService, private toastr: ToastrService) {
    this.signupRequestPayload = {
      username: '',
      email: '',
      password: ''
    };

    const passwordControl = this.fb.control('',[Validators.required, Validators.minLength(4)]);
    this.form = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      username:['', [Validators.required, Validators.minLength(5)]],
      password: passwordControl,
      rePassword:['',[Validators.required, Validators.minLength(4), rePasswordValidatorFactory(passwordControl)]]
    });
   }

  ngOnInit(): void {
  }

  submitHandler(): void{
    
    this.signupRequestPayload.email = this.form.get('email').value;
    this.signupRequestPayload.username = this.form.get('username').value;
    this.signupRequestPayload.password = this.form.get('password').value;

    // if(this.signupRequestPayload==undefined){
    //   this.toastr.error('Registration Failed! Please try again');
    // }

    this.authService.signup(this.signupRequestPayload).subscribe(()=>{
      
    },()=>{
    
     this.router.navigate(['/user/login'], {queryParams: {registered: 'true'}});
      });
    
  }
}
