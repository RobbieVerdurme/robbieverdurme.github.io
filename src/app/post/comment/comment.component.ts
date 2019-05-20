import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../comment.model';
import { AuthenticationService } from 'src/app/user/authentication.service';
import { PostDataService } from '../post.data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../post.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  public post: Post;

  constructor(
    private route: ActivatedRoute,
    private authService : AuthenticationService,
    private postDataService : PostDataService,
  ) {}

  ngOnInit() {
    this.route.data.subscribe(p => (this.post = p['post']));
  }

  get isAdmin(): Boolean{
    return this.authService.isAdmin();
  }

  deleteComment(){
    this.post.deleteComment(this.comment);
    this.postDataService
    .deleteComment(this.post, this.comment)
    .subscribe();
  }
}
