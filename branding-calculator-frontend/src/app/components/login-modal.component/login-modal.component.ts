import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth.service';
import { first } from 'rxjs';

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

      if (!this.email || !this.password) {
        console.error('EMPTY LOGIN FIELDS');
        return;
      }

      this.authService.login(this.email, this.password).subscribe({
        next: () => {

          this.authService.getUserByEmail(this.email)
            .subscribe((user: any) => {

              this.authService.setSession(user);

              // ❗ ВАЖНО: закрыть модалку
              this.onClose();

              // redirect по роли
              if (user.role === 'Admin') {
                this.router.navigate(['/admin']);
              } else {
                this.router.navigate(['/branding-catalog']);
              }

            });
        },
        error: (err) => console.error(err)
      });

    } else {
      this.onRegister();
    }
  }

  public onRegister(): void {

    this.authService.register({
      ...this.registerData,
      isActive: true
    }).subscribe({

      next: () => {

        this.authService.login(
          this.registerData.email,
          this.registerData.password
        ).subscribe({

          next: () => {

            this.authService.getUserByEmail(
              this.registerData.email
            ).subscribe((user: any) => {

              console.log('REGISTER USER:', user);

              this.authService.setSession(user);

              this.router.navigate(['/branding-catalog']);
            });
          },

          error: (err) => {
            console.error('AUTO LOGIN ERROR:', err);
          }
        });
      },

      error: (err) => {
        console.error('REGISTER ERROR:', err);
      }
    });
  }
}
