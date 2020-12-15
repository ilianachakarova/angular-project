import { RouterModule, Routes } from "@angular/router";
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from "./user-profile/user-profile.component";


const routes: Routes=[
    {path:'user/signup', component: SignupComponent},
    {path:'user/login',component:LoginComponent},
    {path:'user/user-profile', component:UserProfileComponent}
    
];

export const UserRoutingModule = RouterModule.forChild(routes);