import { Component, OnInit } from "@angular/core";
import { Post } from "../post.model";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from 'src/app/user/authentication.service';
import { PostDataService } from '../post.data.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.css"]
})
export class PostDetailComponent implements OnInit {
  //var
  public post: Post;

  //const
  constructor(
    private route: ActivatedRoute,
    private authService : AuthenticationService,
    private postDataService : PostDataService,
    private router: Router
  ) {}

  //meth
  ngOnInit() {
    this.route.data.subscribe(p => (this.post = p['post']));
  }

  get isAdmin(): Boolean{
    return this.authService.isAdmin();
  }

  deletePost(){
    this.postDataService.deletePost(this.post).subscribe();
    this.router.navigate(['/post/list']);
  }
}
