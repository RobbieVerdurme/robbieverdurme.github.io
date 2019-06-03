import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostDataService } from '../post.data.service';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
//var
public post: FormGroup;
private imgSrc: Blob = null;
private loading: boolean = false;
public loadingValue:number = 0;

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
    const loadend = fromEvent(reader, 'loadend').pipe(
      map((read: any) => {
        return read.target.result;
      })
    );
    reader.readAsDataURL(file);
    return loadend;
  }

  onFileChange(event){
    this.readFile(event.target.files[0] as File).subscribe(res => {
      this.imgSrc = res;
      this.post.get('img').setValue(this.imgSrc);
    });
  }

  onSubmit() {
    this.loading = true;
    const post = new Post(this.post.value.img, this.post.value.title, this.post.value.description);
    this.post.reset();
    this.imgSrc = null;
    this._postDataService
      .addNewPost(post)
      .subscribe(events =>{
        if(events.type == HttpEventType.UploadProgress){
          this.loadingValue = events.loaded / events.total * 100
          if( this.loadingValue == 100){
            this.loading = false;
            this.router.navigate(['/post/list'])
          }
        }
      });
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
