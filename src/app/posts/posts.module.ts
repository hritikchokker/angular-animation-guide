import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { PostCardComponent } from './post-card/post-card.component';
import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';
import { IntersectionObserverModule } from '../shared/directives/intersection-observer/intersection-observer.module';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  }
];

@NgModule({
  declarations: [
    PostsComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    IntersectionObserverModule,
    FlexLayoutModule,
    MatProgressSpinnerModule
  ], providers: [PostsService]
})
export class PostsModule { }
