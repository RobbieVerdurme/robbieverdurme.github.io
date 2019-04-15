//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Component
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//Lazy loading
import { SelectivePreloadStrategy } from './selective-preloading-strategy';


const appRoutes:Routes = [
  { path: 'post', loadChildren: './post/post.module#PostModule'},//, data: {preload: true}},
  { path: '', redirectTo: 'post', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)//, {preloadingStrategy: SelectivePreloadStrategy, enableTracing: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
