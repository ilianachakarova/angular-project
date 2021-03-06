import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private router: Router,private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout():void{
    this.authService.logout();
    this.router.navigateByUrl("/");
  }

  isLoggedIn():boolean{
   return this.authService.isUserLoggedIn();
  }

  getUser(){
    return this.authService.getUserName();
  }

}
