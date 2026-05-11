import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth-modal.component',
  imports: [],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss',
})
export class AuthModalComponent {
  @Output() closeModal = new EventEmitter<void>();

  close(): void {
    this.closeModal.emit();
  }
}
