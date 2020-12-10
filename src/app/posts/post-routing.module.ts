import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';

const routes: Routes= [
    {path:'posts', component:PostListComponent},
    // {path: 'topic/:id', component:}
    // {path:'/view-post/:id', component: },
    {path:'posts/:id',component:PostComponent}
];

export const PostRoutingModule = RouterModule.forChild(routes);