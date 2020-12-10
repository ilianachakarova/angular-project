import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {PostModel} from './post-model';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient) {
   }

   getAllPosts(): Observable<Array<PostModel>>{
    return this.http.get<Array<PostModel>>('http://localhost:8000/api/posts/');
   }

   getPost(id:number): Observable<PostModel>{
      return this.http.get<PostModel>('http://localhost:8000/api/posts/'+id); 
   }

   getAllPostsByUser(name: string): Observable<Array<PostModel>>{
     return this.http.get<Array<PostModel>>('http://localhost:8000/api/posts/'+ name);
   }
}
