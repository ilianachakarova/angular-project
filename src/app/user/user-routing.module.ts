import { RouterModule, Routes } from "@angular/router";
import { SignupComponent } from './signup/signup.component';


const routes: Routes=[
    {path:'user/signup', component: SignupComponent}
];

export const UserRoutingModule = RouterModule.forChild(routes);