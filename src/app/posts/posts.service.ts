import { Injectable, forwardRef } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PostsService {

  constructor(private $http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.$http.get('https://jsonplaceholder.typicode.com/posts/')
      .pipe(map((data: any) => {
        data.forEach((el: any) => ({ ...el, isVisible: false }));
        return data;
      }));
  }
}
