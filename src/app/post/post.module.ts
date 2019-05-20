//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

//lazyloading img?
import { DeferLoadModule } from '@trademe/ng-defer-load';

//Component
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AddCommentComponent } from './add-comment/add-comment.component';

//auth
import { AuthGuard } from '../user/auth.guard';
import { Role } from '../user/role';

//routing
import { RouterModule } from '@angular/router';
import { PostResolver } from './post-resolver';

//angular material
import { MaterialModule } from '../material/material.module';

const routes = [
  { path: 'list', component: PostListComponent},
  { path: 'add',canActivate: [AuthGuard] , component: AddPostComponent, data:{roles: [Role.Admin]}},
  { path: ':id',canActivate: [AuthGuard], component: PostDetailComponent, resolve: {post : PostResolver}},
]

@NgModule({
  declarations: [
    PostComponent,
    CommentComponent,
    PostListComponent,
    PostDetailComponent,
    AddPostComponent,
    AddCommentComponent
  ],
  imports: [
    CommonModule,
    DeferLoadModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [HttpClientModule]
})
export class PostModule { }
