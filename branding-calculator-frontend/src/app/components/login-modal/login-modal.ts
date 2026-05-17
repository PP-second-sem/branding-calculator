import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './login-modal.html',
  styleUrl: './login-modal.scss',
})
export class LoginModalComponent {
  @Output() close = new EventEmitter<void>;
  public email: string = '';
  public password: string = '';

  public onClose(): void {
    this.close.emit();
  }

  public onSubmit(): void {
    console.log({
      email: this.email,
      password: this.password,
    })
  }
}
