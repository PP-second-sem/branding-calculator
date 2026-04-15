import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../pages/catalog/catalog';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card-modal',
  imports: [CommonModule],
  templateUrl: './card-modal.component.html',
  styleUrl: './card-modal.component.scss',
})
export class CardModalComponent {
  @Input() card!: Card;
  @Output() close = new EventEmitter<void>();
}
