import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { PostModel } from '../post-model';
import {PostServiceService} from '../post-service.service'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  posts: Array<PostModel> = [];

  constructor(private postService: PostServiceService) {
    this.postService.getAllPosts().subscribe(post=>{
      this.posts = post;
    })
   }

  ngOnInit(): void {
  }

}
