import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IMaterial } from '../../models/material.model';
import { CommonModule } from '@angular/common';
import { CardsService } from '../../services/cards-service.service';

@Component({
  selector: 'app-card-modal',
  imports: [CommonModule],
  templateUrl: './card-modal.component.html',
  styleUrl: './card-modal.component.scss',
})
export class CardModalComponent {
  public materialService: CardsService = inject(CardsService);
  @Input() card!: IMaterial;
  @Output() close = new EventEmitter<void>();
}
