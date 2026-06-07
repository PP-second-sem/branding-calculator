import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilterDrawer } from '../../components/filter-drawer.component/filter-drawer.component';
import { CardModalComponent } from '../../components/card-modal.component/card-modal.component';
import { FormsModule } from '@angular/forms';
import { MainHeaderComponent } from '../../components/main-header.component/main-header.component';
import { IMaterial } from '../../models/material.model';
import { IFilterState } from '../../models/filter-state.model';
import { SPHERE_CLASS_MAP } from '../../utils/sphere-map';
import { CardsService } from '../../services/cards-service.service';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-catalog',
  imports: [
    RouterModule,
    CommonModule,
    FilterDrawer,
    CardModalComponent,
    FormsModule,
    MainHeaderComponent
  ],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  public search = '';
  public selectedCard: IMaterial | null = null;
  public cards: IMaterial[] = [];
  public isOpen = false;
  public authService: AuthService = inject(AuthService);
  private materialsService = inject(CardsService);
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  public getImageUrl = this.materialsService.getMaterialImageUrl.bind(this.materialsService);

  // 🔥 ЕДИНСТВЕННЫЙ источник фильтров
  public filters: IFilterState = {
    sphere: [],
    formats: [],
    cities: [],
    colors: [],
  };

  public drawerFilters: IFilterState = {
    sphere: [],
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

  deleteCard(id: number, event: MouseEvent) {

    event.stopPropagation();

    if (!confirm('Удалить макет?')) {
      return;
    }

    this.materialsService.deleteMaterial(id)
      .subscribe({
        next: () => {
          this.cards =
            this.cards.filter(x => x.id !== id);
        },
        error: err => console.error(err)
      });
  }

  public openCard(card: IMaterial) {
    this.selectedCard = card;
  }

  public closeCard() {
    this.selectedCard = null;
  }

  public openDrawer() {
    this.drawerFilters = structuredClone(this.filters);
    this.isOpen = true;
  }

  public closeDrawer() {
    this.isOpen = false;
  }

  ngOnInit(): void {
    this.materialsService.getMaterials().subscribe({
      next: (data) => {
        // console.log('DATA:', data)
        this.cards = data;
        // console.log('AFTER SET', this.cards.length)
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Ошибка загрузки материалов:', err);
      }
    });
  }

  // 📌 категории теперь управляются только через filters
  public setCategory(category: string) {
    this.filters.sphere =
      category === 'Все' ? [] : [category];
  }

  public applyFilters(event: IFilterState) {
    console.log('APPLIED FILTERS:', event);
    this.filters = structuredClone(event);
  }

  public isActiveCategory(category: string): boolean {
    return (
      (category === 'Все' && this.filters.sphere.length === 0) ||
      this.filters.sphere.includes(category)
    );
  }

  public get filteredCards(): IMaterial[] {
    const search = this.search.toLowerCase();

    return this.cards.filter(card => {

      const matchSearch =
        !search || card.name.toLowerCase().includes(search);

      const matchSphere =
        this.filters.sphere.length === 0 ||
        this.filters.sphere.includes(card.sphere);

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
        matchSphere &&
        matchFormat &&
        matchCity &&
        matchColor
      );
    });
  }

  public getCardImage(card: IMaterial): string {
    return card.previewUrl || '/cardIcon.svg';
  }

  public getCardClass(card: IMaterial): string {
    return (
      'hero-catalog__card--' +
      (SPHERE_CLASS_MAP[card.sphere] || 'id')
    );
  }

  trackById(_: number, card: IMaterial) {
    return card.id;
  }

  public isImage(card: IMaterial): boolean {
    return ['jpg', 'jpeg', 'png', 'webp'].includes(
      card.fileType.toLowerCase()
    );
  }
}