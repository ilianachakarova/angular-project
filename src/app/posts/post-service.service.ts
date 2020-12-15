import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { CreatePostPayload } from './create-post/create-post.payload';
import { CreateTopicComponent } from './create-topic/create-topic.component';
import {PostModel} from './post-model';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient) {
   }

   createPost(postPayload: CreatePostPayload):Observable<any>{
     return this.http.post('http://localhost:8000/api/posts/',postPayload);
   }

   getAllPosts(): Observable<Array<PostModel>>{
    return this.http.get<Array<PostModel>>('http://localhost:8000/api/posts/');
   }

   getPostById(id:number): Observable<PostModel>{
      return this.http.get<PostModel>('http://localhost:8000/api/posts/'+id); 
   }

   getAllPostsByUser(name: string): Observable<Array<PostModel>>{
     return this.http.get<Array<PostModel>>('http://localhost:8000/api/posts/'+ name);
   }
}
