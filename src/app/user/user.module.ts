import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { SearchFieldModule } from '../shared/modules/search-field/search-field.module';
import { UserCardComponent } from './user-card/user-card.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserService } from './service/user.service';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent
  },
  {
    path: ':id',
    component: UserDetailsComponent
  }
];

@NgModule({
  declarations: [
    UsersListComponent,
    UserDetailsComponent,
    UserCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatGridListModule,
    SearchFieldModule,
    MatButtonModule,
    FlexLayoutModule,
    MatProgressSpinnerModule
  ], providers: [UserService]
})
export class UserModule { }
