//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Component
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//Lazy loading
import { SelectivePreloadStrategy } from './selective-preloading-strategy';

//Authentication
import { AuthGuard } from './user/auth.guard';


const appRoutes:Routes = [
  { path: 'post', canActivate: [AuthGuard], loadChildren: './post/post.module#PostModule'},//, data: {preload: true}},
  { path: '', redirectTo: 'post/list', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)//, {preloadingStrategy: SelectivePreloadStrategy})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
