import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  userList$: BehaviorSubject<any> = new BehaviorSubject([]);
  constructor(private $http: HttpClient) { }

  fetchUsers() {
    this.$http.get<any>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data: any) => {
        this.userList$.next(data);
      })

  }


}
