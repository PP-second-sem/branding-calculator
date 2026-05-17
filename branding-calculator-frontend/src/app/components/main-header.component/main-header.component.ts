import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginModalComponent } from '../login-modal/login-modal';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-main-header',
  imports: [RouterModule, LoginModalComponent, CommonModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss',
})
export class MainHeaderComponent {
  public isLoginModalOpen = false;

  public openLoginModal(): void {
    this.isLoginModalOpen = true;
  }

  public closeLoginModal(): void {
    this.isLoginModalOpen = false;
  }
}
