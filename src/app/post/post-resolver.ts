import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Post } from "./post.model";
import { PostDataService } from "./post.data.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class PostResolver implements Resolve<Post> {
  constructor(private postDataService: PostDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Post> {
    return this.postDataService.getPost$(route.params["id"]);
  }
}
