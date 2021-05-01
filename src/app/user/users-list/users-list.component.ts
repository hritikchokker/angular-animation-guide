import {
  Component,
  OnInit
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  animations: [
    trigger('animateDestroy', [
      state('void', style({ opacity: '0' })),
      state('*', style({ transform: 'scale(1.03)' })),
      transition('void => *', animate('2000ms ease-in')),
      transition('* => void', animate('1000ms ease'))
    ])
  ]
})
export class UsersListComponent implements OnInit {
  userList$!: Observable<any[]>;
  isLoading!: boolean;
  constructor(private $userService: UserService) {
    this.userList$ = this.$userService.userList$;

  }

  ngOnInit(): void {
    this.userList$.pipe(tap((data: any[]) => {
      if (!data) {
        this.isLoading = true;
      } else {
        this.isLoading = false;
      }
    })).subscribe();
    this.$userService.fetchUsers();
  }

  handleSearch(searchItem: any): void {
    if (!searchItem) {
      this.$userService.userList$.next(this.$userService.userListHelper);
      return;
    }
    // tslint:disable-next-line: max-line-length
    this.$userService.userList$.next(this.$userService.userListHelper.filter((el: any) => el.name.toLowerCase().includes(searchItem.toLowerCase())));
  }

}
