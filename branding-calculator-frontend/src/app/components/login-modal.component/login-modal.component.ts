import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
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
  private route: ActivatedRoute = inject(ActivatedRoute);
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

    const returnUrl =
      this.route.snapshot.queryParams['returnUrl']
      || '/branding-catalog';

    this.router.navigate([returnUrl]);
  }
}
