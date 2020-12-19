import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { title } from 'process';
import { Observable, throwError } from 'rxjs';
import { QuizService } from '../quiz.service';
import { QuizPayload } from '../quiz/quiz-payload';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent implements OnInit {

 

  answer = '';
  name:string = '';
  quiz: QuizPayload;
 
  constructor(private quizservice: QuizService, private activatedRoute:ActivatedRoute, private toastr: ToastrService) { 
    this.name =  this.activatedRoute.snapshot.params['name'];
    console.log(this.name);
    this.quiz = { title: '', problems:[]};
  }
  
  ngOnInit() {
    this.quizservice.getQuizByTitle(this.name).subscribe((data)=>{
      this.quiz = data;
    },error=>{throwError(error)});
    
  }
  


  onAnswerInput(value: string) {
    this.answer = value;
  }

  


}
