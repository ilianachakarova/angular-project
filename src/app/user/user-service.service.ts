import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  signup(data: IUser):Observable<any>{
    return this.http.post('http://localhost:8000/api/auth/signup',data)
  }
}
