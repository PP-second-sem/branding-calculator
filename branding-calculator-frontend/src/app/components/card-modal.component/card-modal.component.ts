import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMaterial } from '../../models/material.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card-modal',
  imports: [CommonModule],
  templateUrl: './card-modal.component.html',
  styleUrl: './card-modal.component.scss',
})
export class CardModalComponent {
  @Input() card!: IMaterial;
  @Output() close = new EventEmitter<void>();
}
