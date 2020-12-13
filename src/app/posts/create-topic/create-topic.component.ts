import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TopicModel } from '../topic-side-bar/topic-model';
import { TopicService } from '../topic-side-bar/topic.service';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.css']
})
export class CreateTopicComponent implements OnInit {

  createTopicForm:FormGroup;
  topicModel: TopicModel;
  title = new FormControl('');
  description = new FormControl('');

  constructor(private router: Router, private topicService:TopicService) { }

  ngOnInit(): void {
    this.createTopicForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.topicModel={
      name:'',
      description:''
    }
  }

createTopic(){
  this.topicModel.name = this.createTopicForm.get('title').value;
  this.topicModel.description = this.createTopicForm.get('description').value;
  this.topicService.createTopic(this.topicModel).subscribe(data=>{
    this.router.navigateByUrl('/list-topics');
  })
 
  
}

discard(){
  this.router.navigateByUrl('/posts');
}
}
