import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostDataService } from '../post.data.service';
import { Post } from '../post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
//var
public post: FormGroup;

//constructor
  constructor(
    private fb: FormBuilder,
    private _postDataService: PostDataService,
    private router: Router
  ) { }

//methods
  ngOnInit() {
    this.post = this.fb.group({
      img: [''],
      title: ['', [Validators.required, Validators.minLength(10)]],
      description: ['']
    })
  }

  onSubmit(){
    this._postDataService
      .addNewPost(new Post(this.post.value.img, this.post.value.title, this.post.value.description))
      .subscribe();
    this.router.navigate(['/post/list']);
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
