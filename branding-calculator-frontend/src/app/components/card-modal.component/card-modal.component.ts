import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IMaterial } from '../../models/material.model';
import { CommonModule } from '@angular/common';
import { CardsService } from '../../services/cards-service/cards.service';
import { Router, RouterModule } from '@angular/router';
import { SPHERE_MAP } from '../../utils/sphere-map';

@Component({
  selector: 'app-card-modal',
  imports: [CommonModule, RouterModule],
  templateUrl: './card-modal.component.html',
  styleUrl: './card-modal.component.scss',
})
export class CardModalComponent {
  public SPHERE_MAP = SPHERE_MAP;
  public materialService: CardsService = inject(CardsService);
  public router: Router = inject(Router);
  @Input() card!: IMaterial;
  @Output() close = new EventEmitter<void>();
  openFile() {
    window.open(
      this.materialService.getMaterialImageUrl(this.card.id),
      '_blank'
    );
  }

  downloadFile() {
    const link = document.createElement('a');

    link.href = this.materialService.getMaterialImageUrl(this.card.id);
    link.download = this.card.name;

    link.click();
  }

  copyLink() {
    const url =
      `${window.location.origin}/catalog?material=${this.card.id}`;

    navigator.clipboard.writeText(url);
  }
}
