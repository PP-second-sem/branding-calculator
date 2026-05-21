import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth.service';

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
  public email: string = '';
  public password: string = '';

  public onClose(): void {
    this.close.emit();
  }

  public onSubmit(): void {
    this.authService.login(
      this.email,
      this.password
    );

    this.router.navigate(['/constructor/layouts'])
  }
}
