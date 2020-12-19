import { Component, Input, OnInit } from '@angular/core';
import { QuizPayload } from '../quiz/quiz-payload';

@Component({
  selector: 'app-quiz-tile',
  templateUrl: './quiz-tile.component.html',
  styleUrls: ['./quiz-tile.component.css']
})
export class QuizTileComponent implements OnInit {
  @Input() quizList: Array<QuizPayload>
  constructor() { }

  ngOnInit(): void {
  }

}
