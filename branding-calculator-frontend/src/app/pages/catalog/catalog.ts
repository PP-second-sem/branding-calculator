import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilterDrawer } from '../../components/filter-drawer.component/filter-drawer.component';
import { CardModalComponent } from '../../components/card-modal.component/card-modal.component';
import { FormsModule } from '@angular/forms';
import { MainHeaderComponent } from '../../components/main-header.component/main-header.component';
import { IMaterial } from '../../models/material.model';
import { IFilterState } from '../../models/filter-state.model';
import { SPHERE_CLASS_MAP } from '../../utils/sphere-map';

@Component({
  selector: 'app-catalog',
  imports: [RouterModule, 
    CommonModule, 
    FilterDrawer, 
    CardModalComponent, 
    FormsModule, 
    MainHeaderComponent],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  public search: string = '';
  public selectedCard: IMaterial | null = null;
  public cards: IMaterial[] = [];
  public selectedCategory = 'Все';

  public openCard(card: IMaterial) {
    this.selectedCard = card;
  }

  public closeCard() {
    this.selectedCard = null;
  }
  public isOpen = false;

  public openDrawer(): void {
    this.isOpen = true;
  }

  public closeDrawer(): void {
    this.isOpen = false;
  }

  public filters: IFilterState = {
    categories: [],
    formats: [],
    cities: [],
    colors: [],
  };

  categories = [
    { label: 'Айдентика', value: 'id', color: 'red' },
    { label: 'Навигация', value: 'nav', color: 'blue' },
    { label: 'Документы', value: 'docs', color: 'green' },
    { label: 'Диджитал', value: 'digital', color: 'swamp' }
  ];


  public getCardImage(card: IMaterial): string {
    return card.previewUrl || '/cardIcon.svg';
  }

  public getCardClass(card: IMaterial): string {
    return 'hero-catalog__card--' +
      (SPHERE_CLASS_MAP[card.sphere] || 'id');
  }

  public get filteredCards(): IMaterial[] {
    return this.cards.filter(card => {

      const matchSearch =
        !this.search ||
        card.name.toLowerCase().includes(this.search.toLowerCase());

      const matchDrawerCategory =
        this.filters.categories.length === 0 ||
        this.filters.categories.includes(card.sphere);

      const matchFormat =
        this.filters.formats.length === 0 ||
        this.filters.formats.includes(card.fileType);

      const matchCity =
        this.filters.cities.length === 0 ||
        this.filters.cities.includes(card.city);

      const matchColor =
        this.filters.colors.length === 0 ||
        this.filters.colors.includes(card.color);

      return (
        matchSearch &&
        matchDrawerCategory &&
        matchFormat &&
        matchCity &&
        matchColor
      );
    });
  }

  public setCategory(category: string) {
    this.selectedCategory = category;

    this.filters.categories =
      category === 'Все'
        ? []
        : [category];
  }

  public filterCards() {}


  public applyFilters(event: IFilterState) {
    this.filters = event;
  }

  trackById(_: number, card: IMaterial) {
    return card.id;
  }
}
