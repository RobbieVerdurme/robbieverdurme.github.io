import { Component, OnInit } from "@angular/core";
import { Post } from "../post.model";
import { ActivatedRoute } from "@angular/router";
import { PostDataService } from "../post.data.service";

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
  ) {}

  //meth
  ngOnInit() {
    this.route.data.subscribe(p => this.post = p['post']);
  }
}
