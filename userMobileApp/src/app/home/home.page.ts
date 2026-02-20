import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import * as AuthActions from '../store/auth/auth.actions';
import * as UsersActions from '../store/users/users.actions';
import { selectUsers, selectUsersLoading, selectUsersError } from '../store/users/users.selectors';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  showUsers = false;

  users$ = this.store.select(selectUsers);
  loading$ = this.store.select(selectUsersLoading);
  error$ = this.store.select(selectUsersError);

  constructor(private store: Store, private router: Router) {}

  onShowUsers() {
    this.showUsers = true;
    this.store.dispatch(UsersActions.loadUsers());
  }

  openNewUser() {
    this.router.navigateByUrl('/new-user');
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
    this.router.navigateByUrl('/login');
  }
}