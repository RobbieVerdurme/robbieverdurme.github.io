import { Component } from '@angular/core';
import { POSTS } from './mock-posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Var
  title = 'ProjectWebIV';
  posts = POSTS

  //construtor
  constructor(){}
}
