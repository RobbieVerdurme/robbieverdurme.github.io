//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Component
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { PostListComponent } from './post-list/post-list.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { RouterModule } from '@angular/router';
import { PostResolver } from './post-resolver';

const routes = [
  { path: 'post/list', component: PostListComponent},
  { path: 'post/:id', component: PostDetailComponent, resolve: {post : PostResolver}},
]

@NgModule({
  declarations: [
    PostComponent,
    CommentComponent,
    PostListComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [HttpClientModule]
})
export class PostModule { }
