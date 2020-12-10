import { RouterModule, Routes } from "@angular/router";
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes=[
    {path:'user/signup', component: SignupComponent},
    {path:'user/login',component:LoginComponent},
    {path:'user/confirm-email', component:ConfirmEmailComponent}
    
];

export const UserRoutingModule = RouterModule.forChild(routes);