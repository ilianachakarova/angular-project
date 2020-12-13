import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopicService } from '../topic-side-bar/topic.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private router: Router, private topicService:TopicService) { }

  ngOnInit(): void {
  }

  goToCreateTheme(){
    this.router.navigateByUrl('/create-topic');
  }

  goToCreatePost(){
    this.router.navigateByUrl('/create-post');
  }

}
