import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentPayload } from './comment-payload';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  postComment(commentPayload: CommentPayload):Observable<any>{
    return this.http.post('http://localhost:8000/api/comments', commentPayload);
  }

  getCommentsForPost(postId: number): Observable<Array<CommentPayload>>{
    return this.http.get<Array<CommentPayload>>('http://localhost:8000/api/comments/by-post/'+postId);
  }

  getAllCommentsByUser(username: string){
    return this.http.get<CommentPayload[]>('http://localhost:8000/api/comments/by-user/'+ username);
  }
}
