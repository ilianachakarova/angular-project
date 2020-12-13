import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { PostServiceService } from '../post-service.service';
import { TopicModel } from '../topic-side-bar/topic-model';
import { TopicService } from '../topic-side-bar/topic.service';
import { CreatePostPayload } from './create-post.payload';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;
  postPayload: CreatePostPayload;
  topics: Array<TopicModel>;
  constructor(private router: Router, private postService: PostServiceService, 
    private topicService: TopicService) {
      this.postPayload ={
        postName: '',
        topicName:'',
        url:'',
        description:''
      }
     }



  ngOnInit(): void {

    this.createPostForm = new FormGroup({
      postName: new FormControl('',Validators.required),
      topicName: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.topicService.getAllTopics().subscribe(data=>{
      this.topics = data;
    }, error=>{throwError(console.error)});
  }

  createPost(){
    this.postPayload.postName = this.createPostForm.get('postName').value;
    this.postPayload.topicName = this.createPostForm.get('topicName').value;
    this.postPayload.url = this.createPostForm.get('url').value;
    this.postPayload.description = this.createPostForm.get('description').value;
  }

  discardPost(){
    this.router.navigateByUrl('/posts');
  }

}
