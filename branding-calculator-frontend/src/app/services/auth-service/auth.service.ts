import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public currentUser = signal<any | null>(null);
  public router: Router = inject(Router);
  private baseUrl = '/api/User';

  private http: HttpClient = inject(HttpClient);

  login(email: string, password: string) {
    return this.http.post(`${this.baseUrl}/login`, {
      email,
      password
    }).pipe(
      tap((user: any) => {

        this.setSession(user);

        if (user.role === 'Admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/']);
        }
      })
    );
  }

  register(data: any) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  setSession(user: any) {
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

  logout() {
    return this.http.post('/api/User/exit', {}, { withCredentials: true });
  }

  isLoggedIn(): boolean {
    return !!this.currentUser();
  }

  getUserByEmail(email: string) {
    return this.http.get(`${this.baseUrl}/${email}`);
  }
}