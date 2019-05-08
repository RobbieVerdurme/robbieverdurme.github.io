import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostDataService } from '../post.data.service';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
//var
public post: FormGroup;
imgSrc: Blob = null;

//constructor
  constructor(
    private fb: FormBuilder,
    private _postDataService: PostDataService,
    private router: Router
  ) { }

//methods
  ngOnInit() {
    this.post = this.fb.group({
      img: [undefined, [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['']
    })
  }
  
  readFile(file: File | Blob): Observable<any> {
    const reader = new FileReader();
    let loadend = fromEvent(reader, 'loadend').pipe(
      map((read: any) => {
        return read.target.result;
      })
    );
    reader.readAsDataURL(file);
    return loadend;
  }

  onFileChange(event){
    this.readFile(<File>event.target.files[0]).subscribe(res => {
      this.imgSrc = res;
      this.post.get('img').setValue(res);
    });
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
