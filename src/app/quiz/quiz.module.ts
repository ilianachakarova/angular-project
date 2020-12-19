import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizRoutingModule } from './quiz-routing.module';
import { ViewQuizComponent } from './view-quiz/view-quiz.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizTileComponent } from './quiz-tile/quiz-tile.component';



@NgModule({
  declarations: [QuizComponent, ViewQuizComponent, QuizListComponent, QuizTileComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    QuizRoutingModule
  ],
  exports:[QuizComponent]
})
export class QuizModule { }
