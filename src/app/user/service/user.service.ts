import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  userList$: BehaviorSubject<any> = new BehaviorSubject([]);
  userListHelper = [];
  constructor(private $http: HttpClient) { }

  fetchUsers(): void {
    this.$http.get<any>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data: any) => {
        this.userListHelper = data;
        this.userList$.next(data);
      });
  }


}
