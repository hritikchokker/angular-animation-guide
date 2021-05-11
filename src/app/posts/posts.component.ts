import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  post$!: Observable<any>;
  constructor(private $postService: PostsService) { }

  ngOnInit(): void {
    this.post$ = this.$postService.getPosts();
  }
}
