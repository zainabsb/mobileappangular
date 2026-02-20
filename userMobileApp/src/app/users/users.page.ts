import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import * as UsersActions from '../store/users/users.actions';
import { selectUsers, selectUsersError, selectUsersLoading } from '../store/users/users.selectors';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users$ = this.store.select(selectUsers);
  loading$ = this.store.select(selectUsersLoading);
  error$ = this.store.select(selectUsersError);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(UsersActions.loadUsers());
  }
}
