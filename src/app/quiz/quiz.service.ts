import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizPayload } from './quiz/quiz-payload';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  createQuiz(quizPayload:QuizPayload): Observable<any>{
    return this.http.post('http://localhost:8000/api/quiz', quizPayload);
  }

  getAllQuizes():Observable<Array<QuizPayload>>{
    return this.http.get<Array<QuizPayload>>('http://localhost:8000/api/quiz');
  }

  getQuizByTitle(name:string):Observable<QuizPayload>{
    return this.http.get<QuizPayload>('http://localhost:8000/api/quiz/'+ name);
  }
}
