import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import * as AuthActions from '../store/auth/auth.actions';
import { selectAuthError, selectAuthLoading, selectIsLoggedIn } from '../store/auth/auth.selectors';

const DARK_KEY = 'app-dark-mode';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username = '';
  password = '';

  darkMode = false;

  loading$ = this.store.select(selectAuthLoading);
  error$ = this.store.select(selectAuthError);

  constructor(private store: Store, private router: Router) {
    this.darkMode = localStorage.getItem(DARK_KEY) === 'true';
    this.applyDarkMode();

    this.store.select(selectIsLoggedIn).subscribe((loggedIn) => {
      if (loggedIn) {
        this.router.navigateByUrl('/home');
      }
    });
  }

  toggleDarkMode(ev: { detail: { checked: boolean } }) {
    this.darkMode = ev.detail.checked;
    localStorage.setItem(DARK_KEY, String(this.darkMode));
    this.applyDarkMode();
  }

  private applyDarkMode() {
    const app = document.querySelector('ion-app');
    if (app) app.classList.toggle('ion-palette-dark', this.darkMode);
  }

  submit() {
    this.store.dispatch(
      AuthActions.login({ username: this.username, password: this.password }),
    );
  }
}
