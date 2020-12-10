import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostModel } from '../post-model';
import { faComments } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 
  faComments = faComments;
  @Input() posts: PostModel[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }

}
