import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth.service';
import { first, map, switchMap } from 'rxjs';
export interface IUser {
  email: string,
  firstName: string,
  id: number;
  isActive: boolean;
  lastName: string;
  middleName: string;
  organization: string;
  phoneNumber: string;
  role: string
}
@Component({
  selector: 'app-login-modal',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss',
})
export class LoginModalComponent {
  @Output() close = new EventEmitter<void>;
  public authService: AuthService = inject(AuthService);
  public router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);
  public email: string = '';
  public mode: 'login' | 'register' = 'login';
  public password: string = '';
  public registerData = {
    lastName: '',
    firstName: '',
    middleName: '',
    phoneNumber: '',
    organization: '',
    email: '',
    password: '',
  };
  public switchMode(): void {
    this.mode = this.mode === 'login' ? 'register' : 'login';
  }

  public onClose(): void {
    this.close.emit();
  }

  public onSubmit(): void {

    if (this.mode === 'login') {

      if (!this.email || !this.password) return;

      this.handleAuth(this.email, this.password);
    }
  }

  private handleAuth(email: string, password: string) {

    this.authService.login(email, password).pipe(
      switchMap((res: any) => {

        if (res?.token) {
          localStorage.setItem('token', res.token);
        }

        return this.authService.getUserByEmail(email).pipe(
          map((user: IUser) => ({ user, token: res.token }))
        );
      })
    ).subscribe({
      next: ({ user, token }) => {

        this.authService.setSession({
          ...user,
          token
        });

        this.onClose();

        this.router.navigate([
          user.role === 'Admin'
            ? '/admin'
            : '/branding-catalog'
        ]);
      },
      error: err => console.error(err)
    });
  }

  public onRegister(): void {

    this.authService.register({
      ...this.registerData,
      isActive: true
    }).subscribe({
      next: () => {
        this.handleAuth(
          this.registerData.email,
          this.registerData.password
        );
      },
      error: err => console.error('REGISTER ERROR:', err)
    });
  }
}
