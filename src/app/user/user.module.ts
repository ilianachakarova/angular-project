import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { CoreModule } from '../core/core.module';
import { LoginComponent } from './login/login.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';



@NgModule({
  declarations: [SignupComponent, LoginComponent, ConfirmEmailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UserRoutingModule,
   
  ],
  exports:[]
})
export class UserModule { }
