import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-catalog',
  imports: [RouterModule, CommonModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  cards = [
    {
      filter: 'id',
      category: 'Айдентика',
      title: 'Визитка',
      formats: ['SVG', 'PNG', 'PDF']
    },
    {
      filter: 'nav',
      category: 'Навигация',
      title: 'Табличка',
      formats: ['SVG', 'PNG']
    },
    {
      filter: 'nav',
      category: 'Навигация',
      title: 'Инфостенд',
      formats: ['SVG', 'AI']
    },
    {
      filter: 'nav',
      category: 'Навигация',
      title: 'Навигационная табличка',
      formats: ['OTF', 'TTF']
    },
    {
      filter: 'docs',
      category: 'Документы',
      title: 'Презентация',
      formats: ['PPTX', 'PDF']
    },
    {
      filter: 'docs',
      category: 'Документы',
      title: 'Сертификат',
      formats: ['SVG', 'PNG']
    },
    {
      filter: 'id',
      category: 'Айдентика',
      title: 'Бейдж',
      formats: ['SVG', 'PNG', 'PDF']
    },
    {
      filter: 'digital',
      category: 'Digital',
      title: 'Пост для соцсетей',
      formats: ['SVG', 'PNG']
    },
    {
      filter: 'docs',
      category: 'Документы',
      title: 'Фирменный бланк',
      formats: ['DOCX', 'PDF']
    },
    {
      filter: 'docs',
      category: 'Документы',
      title: 'Фирменный бланк',
      formats: ['DOCX', 'PDF']
    },
    {
      filter: 'id',
      category: 'Айдентика',
      title: 'Шрифты',
      formats: ['OTF', 'TTF']
    },
    {
      filter: 'digital',
      category: 'Digital',
      title: 'Паттерны',
      formats: ['SVG', 'PNG', 'PDF']
    },
    {
      filter: 'id',
      category: 'Айдентика',
      title: 'Иллюстрации',
      formats: ['SVG', 'PNG', 'AI']
    },
    {
      filter: 'docs',
      category: 'Документы',
      title: 'Кейсы',
      formats: ['PDF']
    },
  ]
}
