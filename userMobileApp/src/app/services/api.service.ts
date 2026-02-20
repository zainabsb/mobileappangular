import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private base = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  login(data: { username: string; password: string }) {
    return this.http.post<any>(`${this.base}/auth/login`, data);
  }

  registerUser(data: any) {
    return this.http.post<any>(`${this.base}/auth/register`, data);
  }

  getUsers() {
    return this.http.get<any[]>(`${this.base}/users`);
  }
}

