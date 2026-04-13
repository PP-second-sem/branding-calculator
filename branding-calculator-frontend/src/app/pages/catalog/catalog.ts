import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilterDrawer } from '../../components/filter-drawer.component/filter-drawer.component';
import { CardModalComponent } from '../../components/card-modal.component/card-modal.component';

@Component({
  selector: 'app-catalog',
  imports: [RouterModule, CommonModule, FilterDrawer, CardModalComponent],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  public selectedCard: any = null;

  public openCard(card: any): void {
    this.selectedCard = card;
  }

  public closeCard(): void {
    this.selectedCard = null;
  }
  public isOpen = false;

  public openDrawer(): void {
    this.isOpen = true;
  }

  public closeDrawer(): void {
    this.isOpen = false;
  }

  public filters: {
    categories: string[];
    formats: string[];
    cities: string[];
    colors: string[];
  } = {
    categories: [],
    formats: [],
    cities: [],
    colors: [],
  };

  private getFilteredCards(): void {
    this.cards.filter(card => {
      const categoryOk =
        this.filters.categories.length === 0 ||
        this.filters.categories.includes(card.category);

      const formatOk =
        this.filters.formats.length === 0 ||
        card.formats.some(f => this.filters.formats.includes(f));

      const cityOk =
        this.filters.cities.length === 0 ||
        this.filters.cities.includes(card.city);

      const colorOk =
        this.filters.colors.length === 0 ||
        this.filters.colors.includes(card.color);

      return categoryOk && formatOk && cityOk && colorOk;
    })
  }

  categories = [
    { label: 'Айдентика', value: 'id', color: 'red' },
    { label: 'Навигация', value: 'nav', color: 'blue' },
    { label: 'Документы', value: 'docs', color: 'green' },
    { label: 'Диджитал', value: 'digital', color: 'swamp' }
  ];


  cards = [
    {
      filter: 'id',
      category: 'Айдентика',
      title: 'Визитка',
      formats: ['SVG', 'PNG', 'PDF'],
      city: '',
      color: ''
    },
    {
      filter: 'nav',
      category: 'Навигация',
      title: 'Табличка',
      formats: ['SVG', 'PNG'],
      city: '',
      color: ''
    },
    {
      filter: 'nav',
      category: 'Навигация',
      title: 'Инфостенд',
      formats: ['SVG', 'AI'],
      city: '',
      color: ''
    },
    {
      filter: 'nav',
      category: 'Навигация',
      title: 'Навигационная табличка',
      formats: ['OTF', 'TTF'],
      city: '',
      color: ''
    },
    {
      filter: 'docs',
      category: 'Документы',
      title: 'Презентация',
      formats: ['PPTX', 'PDF'],
      city: '',
      color: ''
    },
    {
      filter: 'docs',
      category: 'Документы',
      title: 'Сертификат',
      formats: ['SVG', 'PNG'],
      city: '',
      color: ''
    },
    {
      filter: 'id',
      category: 'Айдентика',
      title: 'Бейдж',
      formats: ['SVG', 'PNG', 'PDF'],
      city: '',
      color: ''
    },
    {
      filter: 'digital',
      category: 'Digital',
      title: 'Пост для соцсетей',
      formats: ['SVG', 'PNG'],
      city: '',
      color: ''
    },
    {
      filter: 'docs',
      category: 'Документы',
      title: 'Фирменный бланк',
      formats: ['DOCX', 'PDF'],
      city: '',
      color: ''
    },
    {
      filter: 'docs',
      category: 'Документы',
      title: 'Фирменный бланк',
      formats: ['DOCX', 'PDF'],
      city: '',
      color: ''
    },
    {
      filter: 'id',
      category: 'Айдентика',
      title: 'Шрифты',
      formats: ['OTF', 'TTF'],
      city: '',
      color: ''
    },
    {
      filter: 'digital',
      category: 'Digital',
      title: 'Паттерны',
      formats: ['SVG', 'PNG', 'PDF'],
      city: '',
      color: ''
    },
    {
      filter: 'id',
      category: 'Айдентика',
      title: 'Иллюстрации',
      formats: ['SVG', 'PNG', 'AI'],
      city: '',
      color: ''
    },
    {
      filter: 'docs',
      category: 'Документы',
      title: 'Кейсы',
      formats: ['PDF'],
      city: '',
      color: ''
    },
  ];

  public filteredCards = [...this.cards];

  private filterCards(): void {
    this.filteredCards = this.cards.filter(card => {

      const categoryOk =
        this.filters.categories.length === 0 ||
        this.filters.categories.includes(card.category);

      const formatOk =
        this.filters.formats.length === 0 ||
        card.formats.some(f => this.filters.formats.includes(f));

      const cityOk =
        this.filters.cities.length === 0 ||
        this.filters.cities.includes(card.city);

      const colorOk =
        this.filters.colors.length === 0 ||
        this.filters.colors.includes(card.color);

      return categoryOk && formatOk && cityOk && colorOk;
    });
  }

  public applyFilters(filters: any): void {
    this.filters = filters;
    this.filterCards();
    this.isOpen = false;
    console.log('FILTERS FROM DRAWER:', filters);
  }
}
