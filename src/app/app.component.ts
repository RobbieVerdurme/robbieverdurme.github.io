import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post/post.model';
import { PostDataService } from './post/post.data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Var
  title = 'ProjectWebIV';
  private _fetchPost$: Observable<Post[]> = this._postDataService.posts$;
  public loadingError$ = this._postDataService.loadingError$;

  //construtor
  constructor(private _postDataService: PostDataService){}

  //getters
  get posts$(): Observable<Post[]>{
    return this._fetchPost$;
  }
}
