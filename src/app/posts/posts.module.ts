import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import {PostRoutingModule} from './post-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopicSideBarComponent } from './topic-side-bar/topic-side-bar.component';
import { VoteButtonComponent } from './vote-button/vote-button.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [PostComponent, PostListComponent, SideBarComponent, TopicSideBarComponent, VoteButtonComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    FontAwesomeModule
  ],
  exports:[
    PostListComponent,
    TopicSideBarComponent,
    VoteButtonComponent,
    SideBarComponent
  ]
})
export class PostsModule { }
