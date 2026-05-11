import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilterDrawer } from '../../components/filter-drawer.component/filter-drawer.component';
import { CardModalComponent } from '../../components/card-modal.component/card-modal.component';
import { FormsModule } from '@angular/forms';
import { MainHeaderComponent } from '../../components/main-header.component/main-header.component';

export interface Card {
  title: string;
  fileSize: string;
  filePath: string;
  sphere: string;
  category: string;
  city: string;
  color: string;
  formats: string[];
  filter: string;
  desc: string;
  img: string;
}

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
  selectedCategory: string = 'Все';
  public selectedCard: Card | null = null;

  public openCard(card: Card) {
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

  categories = [
    { label: 'Айдентика', value: 'id', color: 'red' },
    { label: 'Навигация', value: 'nav', color: 'blue' },
    { label: 'Документы', value: 'docs', color: 'green' },
    { label: 'Диджитал', value: 'digital', color: 'swamp' }
  ];


  public cards: Card[] = [
  {
      title: 'Авиакомпания Ямал Авиабилет',
      fileSize: '102 КБ',
      filePath: 'Примеры внедрения бренда территории/Хорошие примеры/Авиакомпания Ямал Авиабилет 2.jpeg',
      sphere: 'Айдентика',
      category: 'Кейс',
      city: '',
      color: 'Красный',
      formats: ['JPG'],
      filter: 'id',
      desc: 'Хороший пример внедрения',
      img: '/yamal_aviabilet_2.jpeg'
    },
    {
      title: 'Брендбук',
      fileSize: '466 MБ',
      filePath: 'Брендбук ЯМАЛ Мастер бренд/Ямал мастер брендбук.pdf',
      sphere: 'Айдентика',
      category: 'Брендбук',
      city: '',
      color: 'Красный',
      formats: ['PDF'],
      filter: 'id',
      desc: '',
      img: '/yamal_master_brandbook.pdf'
    },
    {
      title: 'Брендбук Салехард',
      fileSize: '15 MБ',
      filePath: 'Брендбук Салехард/Салехард брендбук.pdf',
      sphere: 'Айдентика',
      category: 'Брендбук',
      city: 'Салехард',
      color: 'Красный',
      formats: ['PDF'],
      filter: 'id',
      desc: '',
      img: '/salehard_brandbook.pdf'
    },
    {
      title: 'Брендбук Н.Уренгой ',
      fileSize: '14 MБ',
      filePath: 'Брендбук Новый Уренгой/Новый Уренгой брендбук.pdf',
      sphere: 'Айдентика',
      category: 'Иллюстрации',
      city: 'Новый Уренгой',
      color: 'Красный',
      formats: ['PDF'],
      filter: 'id',
      desc: '',
      img: '/new_urengoi_brandbook.pdf'
    },
    {
      title: 'Брендбук Ноябрьск',
      fileSize: '17 МБ',
      filePath: 'Брендбук Ноябрьск/Ноябрьск брендбук.pdf',
      sphere: 'Айдентика',
      category: 'Брендбук',
      city: 'Ноябрьск',
      color: 'Красный',
      formats: ['PDF'],
      filter: 'id',
      desc: '',
      img: '/noyabrsk_brandbook.pdf'
    },
    {
      title: 'Авиакомпания Ямал Юбилейные буклеты 2.jpeg',
      fileSize: '172 КБ',
      filePath: 'Примеры внедрения бренда территории/Спорные примеры/Авиакомпания Ямал Юбилейные буклеты 2.jpeg',
      sphere: 'Айдентика',
      category: 'Кейс',
      city: '',
      color: 'Красный',
      formats: ['JPG'],
      filter: 'id',
      desc: 'Спорный пример',
      img: '/avia_company_yamal_ubileini_bileti.jpeg'
    },
    {
      title: 'Детский логотип',
      fileSize: '105 КБ',
      filePath: 'Детский логотип/Детский логотип.jpg',
      sphere: 'Айдентика',
      category: 'Логотип',
      city: '',
      color: 'Красный',
      formats: ['JPG'],
      filter: 'id',
      desc: '',
      img: '/child_logo.jpeg'
    },
    {
      title: 'Детский логотип',
      fileSize: '4.3 КБ',
      filePath: 'Детский логотип/Детский логотип.pdf',
      sphere: 'Айдентика',
      category: 'Логотип',
      city: '',
      color: 'Красный',
      formats: ['PDF'],
      filter: 'id',
      desc: '',
      img: '/child_pdf_logo'
    },
    {
      title: 'Golos_Text.zip',
      fileSize: '581 КБ',
      filePath: 'Шрифт/Golos_Text.zip',
      sphere: 'Документы',
      category: 'Шрифт',
      city: '',
      color: 'Зеленый',
      formats: ['ZIP'],
      filter: 'docs',
      desc: '',
      img: '/Golos_text.zip'
    },
    {
      title: 'Новый уренгой_Color.png',
      fileSize: '9.6 КБ',
      filePath: 'Логотипы городов/Новый Уренгой/2. Color/Новый уренгой_Color.png',
      sphere: 'Айдентика',
      category: 'Логотип',
      city: 'Новый Уренгой',
      color: 'Синий',
      formats: ['PNG'],
      filter: 'id',
      desc: '',
      img: '/new_urengoi_logo.png',
    },
    {
      title: 'Новый уренгой_Black.png',
      fileSize: '6.6 КБ',
      filePath: 'Логотипы городов/Новый Уренгой/3. Black/Новый уренгой_Black.png',
      sphere: 'Айдентика',
      category: 'Логотип',
      city: 'Новый Уренгой',
      color: 'Черный',
      formats: ['PNG'],
      filter: 'id',
      desc: '',
      img: '/new_urengoi_black.png'
    },
    {
      title: 'Новый уренгой_White.png',
      fileSize: '7.1 КБ',
      filePath: 'Логотипы городов/Новый Уренгой/4. White/Новый уренгой_White.png',
      sphere: 'Айдентика',
      category: 'Логотип',
      city: 'Новый Уренгой',
      color: 'Белый',
      formats: ['PNG'],
      filter: 'id',
      desc: '',
      img: ''
    },
    {
      title: 'Фирменный знак_Black.jpg',
      fileSize: '25 КБ',
      filePath: 'Фирменный знак/Ямал/Фирменный знак_Black.jpg',
      sphere: 'Айдентика',
      category: 'Фирменный знак',
      city: '',
      color: 'Чёрный',
      formats: ['JPG'],
      filter: 'id',
      desc: '',
      img: '/znak.jpg',
    },
    {
      title: 'Фирменный знак_Color.png',
      fileSize: '7.6 КБ',
      filePath: 'Фирменный знак/Ямал/Фирменный знак_Color.png',
      sphere: 'Айдентика',
      category: 'Фирменный знак',
      city: '',
      color: 'Черный',
      formats: ['PNG'],
      filter: 'id',
      desc: '',
      img: '/znak_red.png'
    },
    {
      title: 'Логотип_Color.png',
      fileSize: '17 КБ',
      filePath: 'Логотип/Логотип/2. Color/Логотип_Color.png',
      sphere: 'Айдентика',
      category: 'Логотип',
      city: '',
      color: 'Красный',
      formats: ['PNG'],
      filter: 'id',
      desc: '',
      img: '/base_logo.png'
    },
    {
      title: 'Логотип_Black.png',
      fileSize: '13 КБ',
      filePath: 'Логотип/Логотип/3. Black/Логотип_Black.png',
      sphere: 'Айдентика',
      category: 'Логотип',
      city: '',
      color: 'Черный',
      formats: ['PNG'],
      filter: 'id',
      desc: '',
      img: '/base_logo_black.png'
    },
    {
      title: '102.png',
      fileSize: '56 КБ',
      filePath: 'Иллюстрации мастер-бренда SVG-элементы/102.png',
      sphere: 'Айдентика',
      category: 'Иллюстрация',
      city: '',
      color: 'Красный',
      formats: ['PNG'],
      filter: 'id',
      desc: '',
      img: '/102.png'
    },
    {
      title: '2-4, блокнот на кольцах, 148х210мм вылет 3мм.png',
      fileSize: '19 КБ',
      filePath: 'Каталог сувенирной продукции/2-Канцелярия/2-1, блокнот на кольцах/2-4, блокнот на кольцах, 148х210 мм/2-4, блокнот на кольцах, 148х210мм вылет 3мм.png',
      sphere: 'Айдентика',
      category: 'Иллюстрация',
      city: '',
      color: 'Красный',
      formats: ['PNG'],
      filter: 'id',
      desc: '',
      img: '/paper_on_ring.png'
    },
    {
      title: '4-1 футболка 1.png',
      fileSize: '214 КБ',
      filePath: 'Каталог сувенирной продукции/1-Сувенирная продукция/1-1 футболки/1 футболка/4-1 футболка 1.png',
      sphere: 'Айдентика',
      category: 'Сувенирная продукция',
      city: '',
      color: 'Красный',
      formats: ['PNG'],
      filter: 'id',
      desc: '',
      img: '/shirt_4_1.png'
    },
  ];

  public getCardImage(card: Card): string {
    const imageFormats = ['jpg', 'jpeg', 'png', 'webp'];

    const hasImage = card.formats.some((f: string) =>
      imageFormats.includes(f.toLowerCase())
    );

    return hasImage && card.img
      ? card.img
      : '/cardIcon.svg';
  }

  public filteredCards: Card[] = [];

  ngOnInit() {
    this.applyAllFilters();
  }

  public setCategory(category: string) {
    this.selectedCategory = category;
    this.applyAllFilters();
  }

  public filterCards() {
    this.applyAllFilters();
  }

  private applyAllFilters(): void {
    this.filteredCards = this.cards.filter(card => {
      const matchSearch =
        !this.search ||
        card.title.toLowerCase().includes(this.search.toLowerCase());

      const matchCategory =
        this.selectedCategory === 'Все' ||
        card.category === this.selectedCategory;

      const matchDrawerCategory =
        this.filters.categories.length === 0 ||
        this.filters.categories.includes(card.sphere);

      const matchFormat =
        this.filters.formats.length === 0 ||
        card.formats.some(f => this.filters.formats.includes(f));

      const matchCity =
        this.filters.cities.length === 0 ||
        this.filters.cities.includes(card.city);

      const matchColor =
        this.filters.colors.length === 0 ||
        this.filters.colors.includes(card.color);

      return (
        matchSearch &&
        matchCategory &&
        matchDrawerCategory &&
        matchFormat &&
        matchCity &&
        matchColor
      );
    });
  }

  public applyFilters(event: any) {
    this.filters = event;
    this.applyAllFilters();
  }
}
