import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  userList$!: Observable<any[]>;
  isLoading!: boolean;
  constructor(private $userService: UserService) {
    this.userList$ = this.$userService.userList$;
    this.$userService.userList$.pipe(tap((data: any[]) => {
      debugger;
      if (!data) {
        this.isLoading = true;
      } else {
        this.isLoading = false;
      }
    }));
  }

  ngOnInit(): void {
    this.$userService.fetchUsers();
  }

  handleSearch(searchItem: any): void {
    console.log(searchItem);
  }

}
