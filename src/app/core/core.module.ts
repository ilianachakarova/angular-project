import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import{ NgxWebstorageModule } from 'ngx-webstorage';
import { QuizModule } from '../quiz/quiz.module';





@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    UserModule,
    QuizModule,
    NgxWebstorageModule.forRoot()
  ],
  providers:[AuthService],
  exports:[ HeaderComponent]
})
export class CoreModule { }
