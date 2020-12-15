import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostModel } from '../post-model';
import { PostServiceService } from '../post-service.service';
import { CommentPayload } from './comment-payload';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  postId:number;
  post:PostModel;
  commentForm: FormGroup;
  commentPayload: CommentPayload;
  comments: Array<CommentPayload>;

  constructor(private postService: PostServiceService, private activateRoute: ActivatedRoute,
    private router: Router, private commentService: CommentService) {
    this.postId = this.activateRoute.snapshot.params['id'];
      console.log(this.postId);
  
    this.commentForm = new FormGroup({
      text: new FormControl('',Validators.required)
    });

    this.commentPayload = {
      text: '',
      postId: this.postId
    };

    this.post={
      id: 0,
      postName: '',
    url: '',
    description: '',
    voteCount: 0,
    userName: '',
    topicName: '',
    commentCount: 0,
    duration: ''

    }
   }

  ngOnInit(): void {
   this.getPostById();
   this.getPostComments();
  }

  postComment(){
    this.commentPayload.text = this.commentForm.get('text').value;
    this.commentService.postComment(this.commentPayload).subscribe((data)=>{
      this.commentForm.get('text').setValue('');
      this.getPostComments();
  })
  };

  private getPostById(){
    this.postService.getPostById(this.postId).subscribe((data)=>{
      this.post = data;
    });
  }

  private getPostComments(){
    this.commentService.getCommentsForPost(this.postId).subscribe((response)=>{
      this.comments = response;
    })
  }

}
