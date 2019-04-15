import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post.model';
import { PostDataService } from '../post.data.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  //var
  public _fetchPosts$: Observable<Post[]> = this._postDataService.posts$;
  public loadingError$ = this._postDataService.loadingError$;

  //const
  constructor(private _postDataService: PostDataService) { }

  //meth
  ngOnInit() {
  }

  //get & set
  get posts$(){
    return this._fetchPosts$
  }
}
