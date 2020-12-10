import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { LoginRequestPayload } from '../user/login/login-request.payload';
import { LoginResponse } from '../user/login/login-response.payload';
import { SignUpRequestPayload } from '../user/signup/signup-request-payload';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private localStorage: LocalStorageService) { }

  signup(signupRequestPayload: SignUpRequestPayload): Observable<any>{
    return this.http.post('http://localhost:8000/api/auth/signup', signupRequestPayload);
  }

  login(loginRequestPayload: LoginRequestPayload): Observable<boolean>{
    return this.http.post<LoginResponse>('http://localhost:8000/api/auth/login',loginRequestPayload)
    .pipe(map(data=>{
      this.localStorage.store('authenticationToken', data.authenticationToken);
      this.localStorage.store('username',data.username);
      this.localStorage.store('refreshToken',data.refreshToken);
      this.localStorage.store('expiresAt', data.expiresAt);
      return true;
    }));
    
  }

  refreshToken() {
    const refreshTokenPayload = {
      refreshToken: this.getRefreshToken(),
      username: this.getUserName()
    }
    return this.http.post<LoginResponse>('http://localhost:8000/api/auth/refresh/token',
      refreshTokenPayload)
      .pipe(tap(response => {
        this.localStorage.store('authenticationToken', response.authenticationToken);
        this.localStorage.store('expiresAt', response.expiresAt);
      }));
  }

  getUserName() {
    return this.localStorage.retrieve('username');
  }

  getExpirationTime() {
    return this.localStorage.retrieve('expiresAt');
  }

  getRefreshToken() {
    return this.localStorage.retrieve('refreshToken');
  }

  getJwtToken(){
    return this.localStorage.retrieve('authenticationToken');
  }
}
