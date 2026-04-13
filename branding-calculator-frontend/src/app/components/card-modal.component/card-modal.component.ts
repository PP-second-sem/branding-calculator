import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-modal',
  imports: [],
  templateUrl: './card-modal.component.html',
  styleUrl: './card-modal.component.scss',
})
export class CardModalComponent {
  @Input() card: any;
  @Output() close = new EventEmitter<void>();
}
