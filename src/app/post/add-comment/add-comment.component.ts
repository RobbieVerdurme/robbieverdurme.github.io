import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostDataService } from '../post.data.service';
import { Post } from '../post.model';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/user/authentication.service';
import { fbind } from 'q';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
//var
public commentFG: FormGroup;
private _post: Post;

//constructor
  constructor(
    private fb: FormBuilder,
    private _postDataService: PostDataService,
    private route: ActivatedRoute,
    private authservice: AuthenticationService
  ) { }

//methods
  ngOnInit() {
    this.route.data.subscribe(p => (this._post = p['post']));
    this.commentFG = this.fb.group({
      comment: ['', [Validators.minLength(2)]]
    })
  }

  onSubmit(){
    this._post.addComent(this.authservice.user$.getValue(),this.commentFG.value.comment)
    this.commentFG.reset();
    this._postDataService
      .updatePost(this._post)
      .subscribe();
  }

  getErrorMessage(errors: any){
    if (!errors) {
      return null;
    }
    if (errors.required) {
      return 'is required';
    } else if (errors.minlength) {
      return `needs at least ${errors.minlength.requiredLength} characters (got ${errors.minlength.actualLength})`;
    }
  }
}
