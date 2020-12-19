import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { title } from 'process';
import { QuizService } from '../quiz.service';
import { QuizPayload } from './quiz-payload';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  
  angForm: FormGroup;
  quiz: QuizPayload;
  constructor(private fb: FormBuilder, private quizService: QuizService, private router: Router) {
    this.buildForm();
   }

  buildForm() {
    this.angForm = this.fb.group({
      title: ['',Validators.required],
      q1: ['',Validators.required],
      q1ch1: ['', Validators.required ],
      q1ch2: ['', Validators.required],
      q1ch3: ['', Validators.required],
      
      q1correctOption: ['', Validators.required],
      q2: ['',Validators.required],
      q2ch1: ['', Validators.required ],
      q2ch2: ['', Validators.required],
      q2ch3: ['', Validators.required],
     
      q2correctOption: ['', Validators.required],
      q3: ['',Validators.required],
      q3ch1: ['', Validators.required ],
      q3ch2: ['', Validators.required],
      q3ch3: ['', Validators.required],
     
      q3correctOption: ['', Validators.required],
      q4: ['',Validators.required],
      q4ch1: ['', Validators.required ],
      q4ch2: ['', Validators.required],
      q4ch3: ['', Validators.required],
      q4correctOption: ['', Validators.required],
      q5: ['',Validators.required],
      q5ch1: ['', Validators.required ],
      q5ch2: ['', Validators.required],
      q5ch3: ['', Validators.required],
      q5correctOption: ['', Validators.required],
    });
    this.quiz = {title:'', problems:
    [

      {question: '',answer1:'',answer2:'',answer3:'',correctAnswer:''},
      {question: '',answer1:'',answer2:'',answer3:'',correctAnswer:''},
      {question: '',answer1:'',answer2:'',answer3:'',correctAnswer:''},
      {question: '',answer1:'',answer2:'',answer3:'',correctAnswer:''},
      {question: '',answer1:'',answer2:'',answer3:'',correctAnswer:''},
    ]
  }
  }

  ngOnInit(): void {
  }

  submitHandler(){
    this.quiz={title: this.angForm.get('title').value, problems: 
  
    [
      
      {question : this.angForm.get('q1').value, answer1 : this.angForm.get('q1ch1').value, 
      answer2 : this.angForm.get('q1ch2').value, answer3 : this.angForm.get('q1ch3').value, 
      correctAnswer : this.angForm.get('q1correctOption').value},

      {question : this.angForm.get('q2').value, answer1 : this.angForm.get('q2ch1').value, 
      answer2 : this.angForm.get('q2ch2').value, answer3 : this.angForm.get('q2ch3').value, 
      correctAnswer : this.angForm.get('q2correctOption').value},

      {question : this.angForm.get('q3').value, answer1 : this.angForm.get('q3ch1').value, 
      answer2 : this.angForm.get('q3ch2').value, answer3 : this.angForm.get('q3ch3').value, 
      correctAnswer : this.angForm.get('q3correctOption').value},

      {question : this.angForm.get('q4').value, answer1 : this.angForm.get('q4ch1').value, 
      answer2 : this.angForm.get('q4ch2').value, answer3 : this.angForm.get('q4ch3').value, 
      correctAnswer : this.angForm.get('q4correctOption').value},

      {question : this.angForm.get('q1').value, answer1 : this.angForm.get('q1ch1').value, 
      answer2 : this.angForm.get('q1ch2').value, answer3 : this.angForm.get('q1ch3').value, 
      correctAnswer : this.angForm.get('q1correctOption').value}
    ]
  }

    this.quizService.createQuiz(this.quiz).subscribe((data)=>{
      console.log('success');
      this.router.navigateByUrl('/');
    },error=>{
      console.log('error');
    })
  }

}
