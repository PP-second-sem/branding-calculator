import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FilterDrawer } from '../../components/filter-drawer.component/filter-drawer.component';
import { CardModalComponent } from '../../components/card-modal.component/card-modal.component';
import { FormsModule } from '@angular/forms';
import { MainHeaderComponent } from '../../components/main-header.component/main-header.component';
import { IMaterial } from '../../models/material.model';
import { IFilterState } from '../../models/filter-state.model';
import { SPHERE_CLASS_MAP } from '../../utils/sphere-map';
import { CardsService } from '../../services/cards-service/cards.service';
import { AuthService } from '../../services/auth-service/auth.service';
import { ActivatedRoute } from '@angular/router';
import { SPHERE_MAP } from '../../utils/sphere-map';

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
  private route = inject(ActivatedRoute);
  public isOpen = false;
  public authService: AuthService = inject(AuthService);
  private materialsService = inject(CardsService);
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  public router: Router = inject(Router);
  public getImageUrl = this.materialsService.getMaterialImageUrl.bind(this.materialsService);
  public imageMap: Record<number, string> = {};
  public SPHERE_MAP = SPHERE_MAP;
  
  public filters: IFilterState = {
    category: [],
    sphere: [],
    formats: [],
    cities: [],
    colors: [],
  };

  public drawerFilters: IFilterState = {
    sphere: [],   // логические ключи (logos, fonts...)
    formats: [],  // pdf, png, svg...
    cities: [],   // Салехард...
    colors: [],
    category: []  // white, black...
  };

  // public filters = {
  //   category: []
  // };


  categories = [
    { label: 'Айдентика', value: 'id', color: 'red' },
    { label: 'Навигация', value: 'nav', color: 'blue' },
    { label: 'Документы', value: 'docs', color: 'green' },
    { label: 'Диджитал', value: 'digital', color: 'swamp' }
  ];

  private categoryMap: Record<string, string> = {
    'Логотип': 'logos',
    'Шрифт': 'fonts',
    'Паттерн': 'patterns',
    'Иллюстрация': 'illustrations',
    'Кейс': 'cases',
    'Брендбук': 'brandbooks',
    'Фирменный знак': 'brand_mark',
    'Сувенирная продукция': 'souvenir_products',
  };

  deleteCard(id: number, event: MouseEvent) {
    console.log('DELETE CLICKED', id)
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

    this.router.navigate([], {
      queryParams: {
        material: card.id
      },
      queryParamsHandling: 'merge'
    });
  }

  public closeCard() {

    this.selectedCard = null;

    this.router.navigate([], {
      queryParams: {
        material: null
      },
      queryParamsHandling: 'merge'
    });
  }

  public openDrawer() {
    //this.drawerFilters = structuredClone(this.filters);
    this.isOpen = true;
  }

  public closeDrawer() {
    this.isOpen = false;
  }

  ngOnInit(): void {
    this.materialsService.getMaterials().subscribe({
      next: (data) => {
        console.log('🔥 RAW BACKEND DATA:', data);
        this.cards = data.map(card => this.normalizeCard(card));

        this.route.queryParams.subscribe(params => {

          const materialId = params['material'];

          if (!materialId) return;

          const card = this.cards.find(
            x => x.id === Number(materialId)
          );

          if (card) {
            this.selectedCard = card;
          }
        });

        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Ошибка загрузки материалов:', err);
      }
    });
  }

  private normalizeCard(card: IMaterial): IMaterial {
    const categoryMap: Record<string, string> = {
      'Брендбук': 'brandbooks',
      'Логотип': 'logos',
      'Шрифт': 'fonts',
      'Паттерн': 'patterns',
      'Иллюстрация': 'illustrations',
      'Кейс': 'cases',
      'Фирменный знак': 'brand_mark',
      'Сувенирная продукция': 'souvenir_products',
    };
    
    return {
      ...card,
      category: categoryMap[card.category] ?? card.category,

    };
  }

  public setCategory(category: string) {
    this.filters.category =
      category === 'Все'
        ? []
        : [this.categoryMap[category]];
  }

  public applyFilters(event: IFilterState) {
    this.drawerFilters = structuredClone(event);
  }

  public isActiveCategory(category: string): boolean {
    if (category === 'Все') {
      return this.filters.category.length === 0;
    }

    const key = this.categoryMap[category];
    return this.filters.category.includes(key);
  }

  public get filteredCards(): IMaterial[] {
    const search = this.search.toLowerCase();

    return this.cards.filter(card => {
      console.log('CARD CATEGORY:', card.category);
      console.log('FILTER CATEGORY:', this.filters.category);

      // 🔎 поиск
      const matchSearch =
        !search || card.name.toLowerCase().includes(search);

      // 🟡 верхние кнопки (РУССКИЕ категории)
      const matchCategory =
        this.filters.category.length === 0 ||
        this.filters.category.includes(card.category);

      // 🔵 drawer sphere (технические ключи)
      const matchSphere =
        this.drawerFilters.sphere.length === 0 ||
        this.drawerFilters.sphere.includes(card.sphere);

      // 📁 форматы
      const matchFormat =
        this.drawerFilters.formats.length === 0 ||
        this.drawerFilters.formats.includes(card.fileType.toLowerCase());

      // 🌆 города
      const matchCity =
        this.drawerFilters.cities.length === 0 ||
        this.drawerFilters.cities.includes(card.city);

      // 🎨 цвета
      const matchColor =
        this.drawerFilters.colors.length === 0 ||
        this.drawerFilters.colors.includes(card.color);

      return (
        matchSearch &&
        matchCategory &&
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