import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { QuizPayload } from '../quiz/quiz-payload';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
  quizList: Array<QuizPayload> = [];

  constructor(private quizService: QuizService) { 
    this.quizService.getAllQuizes().subscribe((data)=>{
      this.quizList = data;
    });
  }

  ngOnInit(): void {
  }

}
