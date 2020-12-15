import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateTopicComponent } from './create-topic/create-topic.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicService } from './topic-side-bar/topic.service';
import { ViewPostComponent } from './view-post/view-post.component';

const routes: Routes= [
    {path:'posts', component:PostListComponent},
    {path: 'create-post', component: CreatePostComponent},
    {path: 'create-topic', component: CreateTopicComponent},
    {path: 'list-topics', component: TopicListComponent},
    // {path:'posts/:id',component:PostComponent},
    {path:'view-post/:id', component:ViewPostComponent}
];

export const PostRoutingModule = RouterModule.forChild(routes);