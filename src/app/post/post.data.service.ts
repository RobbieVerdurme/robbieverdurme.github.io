import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Post } from "./post.model";
import { Comment } from './comment.model';

@Injectable({
  providedIn: "root"
})
export class PostDataService {
  //var
  public loadingError$ = new Subject<string>();

  //construtor
  constructor(private http: HttpClient) {}

//methods
  updatePost(post: Post) {
    return this.http.put(`https://projectwebivbackend20190519035639.azurewebsites.net/api/Posts/${post.id}`, post.toJSON());
  }

  addComment(post:Post, comment: Comment){
    return this.http.post(`https://projectwebivbackend20190519035639.azurewebsites.net/api/Posts/${post.id}/comment`, comment.toJSON());
  }

  deletePost(post: Post){
    return this.http.delete(`https://projectwebivbackend20190519035639.azurewebsites.net/api/Posts/${post.id}`, post.toJSON());
  }

  deleteComment(post : Post, comment: Comment){
    return this.http.delete(`https://projectwebivbackend20190519035639.azurewebsites.net/api/Posts/${post.id}/${comment.id}`, comment.toJSON());
  }

  //getters
  get posts$(): Observable<Post[]> {
    return this.http.get(`https://projectwebivbackend20190519035639.azurewebsites.net/api/Posts/`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of();
      }),
      map((list: any[]): Post[] => list.map(Post.fromJSON)
    ));
  }

  getPost$(id: string): Observable<Post> {
    return this.http.get(`https://projectwebivbackend20190519035639.azurewebsites.net/api/Posts/${id}`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of();
      }),
      map((p: any): Post => Post.fromJSON(p))
    );
  }

  //setter
  addNewPost(p: Post) {
    return this.http.post(`https://projectwebivbackend20190519035639.azurewebsites.net/api/Posts/`, p.toJSON());
  }

}
