import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from 'src/app/posts/post-model';
import { PostServiceService } from 'src/app/posts/post-service.service';
import { CommentPayload } from 'src/app/posts/view-post/comment-payload';
import { CommentService } from 'src/app/posts/view-post/comment.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  username:string;
  posts: PostModel[];
  comments: CommentPayload[];
  postLength: number;
  commentLength:number;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostServiceService,
    private commentService: CommentService) { 
      this.username = this.activatedRoute.snapshot.params.username;

      this.postService.getAllPostsByUser(this.username).subscribe(data=>{
        this.posts = data;
        this.postLength = data.length;
      });

      this.commentService.getAllCommentsByUser(this.username).subscribe((data)=>{
        this.comments = data;
        this.commentLength = data.length;
      })
    }

  ngOnInit(): void {
  }

}
