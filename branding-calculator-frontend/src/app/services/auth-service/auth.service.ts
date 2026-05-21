import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public currentUser = signal<any | null>(null);

  public login(email: string, password: string): void {
    const fakeUser = {
      name:'Иван Иванов',
      email
    }

    this.currentUser.set(fakeUser);

    localStorage.setItem('token', 'fake-token');
  }

  public logout(): void {
    this.currentUser.set(null);
    localStorage.removeItem('token');
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
