import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  userList$!: Observable<any[]>;
  constructor(private $userService: UserService) {
    this.userList$ = this.$userService.userList$;
  }

  ngOnInit(): void {
    this.$userService.fetchUsers();
  }

  handleSearch(searchItem: any): void {
    console.log(searchItem);
  }

}
