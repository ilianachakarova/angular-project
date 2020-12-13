import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { TopicModel } from '../topic-side-bar/topic-model';
import { TopicService } from '../topic-side-bar/topic.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  topics:TopicModel [];
  constructor(private topicService: TopicService) { 
    this.topicService.getAllTopics().subscribe(data=>{
        this.topics = data;
   })
      
   
  }

  ngOnInit(): void {
  }

}
