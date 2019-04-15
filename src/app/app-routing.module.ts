//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post/post-list/post-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { PostResolver } from './post/post-resolver';


const appRoutes:Routes = [
  { path: 'post-list', component: PostListComponent},
  { path: 'post-detail/:id', component: PostDetailComponent, resolve: {post : PostResolver}},
  { path: '', redirectTo: 'post-list', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
