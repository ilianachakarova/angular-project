import { RouterModule, Routes } from "@angular/router";
import { QuizListComponent } from "./quiz-list/quiz-list.component";
import { QuizComponent } from "./quiz/quiz.component";
import { ViewQuizComponent } from "./view-quiz/view-quiz.component";

const routes: Routes=[
   
{path: 'quiz', component: QuizComponent},
{path:'quiz/quiz-list', component: QuizListComponent},
{path: 'quiz/:name', component: ViewQuizComponent}
];

export const QuizRoutingModule = RouterModule.forChild(routes);