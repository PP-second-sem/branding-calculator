import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-request-modal',
  imports: [],
  templateUrl: './request-modal.component.html',
  styleUrl: './request-modal.component.scss',
})
export class RequestModalComponent {
  @Output() close = new EventEmitter<void>();

  public onClose(): void {
    this.close.emit();
  }

}
