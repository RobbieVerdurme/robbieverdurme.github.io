//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post/post-list/post-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes:Routes = [
  { path: 'post-list', component: PostListComponent},
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
