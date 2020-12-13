import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TopicModel } from './topic-model';

@Injectable({
  providedIn: 'root'
})
export class TopicService   {
 

  constructor(private http: HttpClient) { }


  getAllTopics():Observable<Array<TopicModel>>{
    return this.http.get<Array<TopicModel>>('http://localhost:8000/api/topic');
  }

  createTopic(topicModel: TopicModel):Observable<any>{
  
    return this.http.post<TopicModel>('http://localhost:8000/api/topic', topicModel);
  }

}
