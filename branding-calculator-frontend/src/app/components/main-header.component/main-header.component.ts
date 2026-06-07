import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginModalComponent } from '../login-modal.component/login-modal.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth-service/auth.service';
@Component({
  selector: 'app-main-header',
  imports: [RouterModule, LoginModalComponent, CommonModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss',
})
export class MainHeaderComponent {
  public authService: AuthService = inject(AuthService);
  private router = inject(Router);
  public isLoginModalOpen = false;

  ngOnInit() {
    this.authService.loadUserFromStorage();
  }

  public openLoginModal(): void {
    this.isLoginModalOpen = true;
  }

  public closeLoginModal(): void {
    this.isLoginModalOpen = false;
  }

  goToProfile() {
    this.router.navigate(['/constructor/layouts']);
  }
}
