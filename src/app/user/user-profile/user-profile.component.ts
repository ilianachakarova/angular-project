import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';
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
    private commentService: CommentService, private authService: AuthService) { 
      this.username = this.authService.getUserName();
     
      this.postService.getAllPostsByUser(this.username).subscribe((response)=>{
        this.posts = response;
        this.postLength = response.length;
      }, error=>{throwError(error)}
      );

      this.commentService.getAllCommentsByUser(this.username).subscribe((data)=>{
        this.comments = data;
        this.commentLength = data.length;
      }, error=>{throwError(error)});
    }

  ngOnInit(): void {
  }

}
