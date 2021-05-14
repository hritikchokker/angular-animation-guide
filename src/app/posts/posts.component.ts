import { state, style, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  OnDestroy,
  OnInit
} from '@angular/core';

import { Observable } from 'rxjs';
import { IntersectionStatus } from '../shared/intersection.observer';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [
    trigger('addedOn', [
      state('inView', style({
        transform: 'scale(1.1)',
        transition: '1.3s all ease-in-out',
        border: '2px',
        'border-radius': '50px'
      })),
      state('gone', style({
        transform: 'scale(0.8)'
      }))
    ])
  ]
})
export class PostsComponent implements OnInit, OnDestroy {

  postList!: Array<any>;
  isLoading = true;
  currentScrollDistance!: number;
  showUpBtn!: boolean;
  constructor(
    private $postService: PostsService,
    @Inject(Window) private window: Window
  ) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(ev: Event): void {
    if (this.window.scrollY > 500) {
      this.showUpBtn = true;
    } else {
      this.showUpBtn = false;
    }
  }
  ngOnInit(): void {
    this.$postService.getPosts()
      .subscribe(data => {
        this.postList = data;
        this.isLoading = false;
      });
  }
  scrollTop(): void {
    this.window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  onVisibilityChanged(post: any, status: IntersectionStatus, index: number): void {
    if (status === 'Visible') {
      this.postList[index].isVisible = true;
    } else {
      this.postList[index].isVisible = false;
    }
  }

  ngOnDestroy(): void {

  }
}
