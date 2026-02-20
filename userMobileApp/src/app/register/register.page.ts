import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  firstName = '';
  lastName = '';
  age: number | null = null;
  username = '';
  password = '';

  error = '';
  success = '';

  constructor(private api: ApiService, private router: Router) {}

  async save() {
    this.error = '';
    this.success = '';

    if (!this.firstName || !this.lastName || !this.age || !this.username || !this.password) {
      this.error = 'Please fill all fields';
      return;
    }

    this.api.registerUser({
      firstName: this.firstName,
      lastName: this.lastName,
      age: Number(this.age),
      username: this.username,
      password: this.password,
    }).subscribe({
      next: () => {
        this.success = 'User created successfully';
        setTimeout(() => this.router.navigateByUrl('/home'), 500);
      },
      error: (err) => {
        this.error = err?.error?.message || 'Failed to create user';
      },
    });
  }
}
