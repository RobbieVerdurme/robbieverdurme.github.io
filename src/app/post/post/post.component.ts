import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';

import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  //var
  @Input() public post: Post

  //construtor
  constructor(){}

  //methoden
  ngOnInit() {
  }
}