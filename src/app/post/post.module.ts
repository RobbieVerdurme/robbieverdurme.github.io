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

@NgModule({
  declarations: [
    PostComponent,
    CommentComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClientModule]
})
export class PostModule { }
