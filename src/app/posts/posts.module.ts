import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import {PostRoutingModule} from './post-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopicSideBarComponent } from './topic-side-bar/topic-side-bar.component';
import { VoteButtonComponent } from './vote-button/vote-button.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { CreateTopicComponent } from './create-topic/create-topic.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TopicListComponent } from './topic-list/topic-list.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ViewPostComponent } from './view-post/view-post.component';


@NgModule({
  declarations: [PostComponent, 
    PostListComponent, 
    SideBarComponent, 
    TopicSideBarComponent, 
    VoteButtonComponent, 
    CreateTopicComponent,
     CreatePostComponent,
     TopicListComponent,
     ViewPostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    EditorModule
  ],
  exports:[
    PostListComponent,
    TopicSideBarComponent,
    VoteButtonComponent,
    SideBarComponent,
    PostComponent
  ]
})
export class PostsModule { }
