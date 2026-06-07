import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public currentUser = signal<any | null>(null);

  private baseUrl = '/api/User';

  private http: HttpClient = inject(HttpClient);

  login(email: string, password: string) {
    return this.http.post(`${this.baseUrl}/login`, {
      email,
      password
    });
  }

  register(data: any) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  setSession(user: any) {
    localStorage.setItem('token', 'auth-ok');
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUser.set(user);
  }

  loadUserFromStorage() {
    const user = localStorage.getItem('user');

    if (user) {
      this.currentUser.set(JSON.parse(user));
    }
  }

  isAdmin(): boolean {
    return this.currentUser()?.role === 'Admin';
  }

  logout(): void {
    this.currentUser.set(null);

    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getUserByEmail(email: string) {
    return this.http.get(`${this.baseUrl}/${email}`);
  }
}