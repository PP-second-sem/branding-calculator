import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainHeaderComponent } from '../../components/main-header.component/main-header.component';
import { MainFooterComponent } from '../../components/main-footer.component/main-footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  imports: [RouterModule, 
    MainHeaderComponent,
    MainFooterComponent,
    CommonModule
  ],
  templateUrl: './main-page.html',
  styleUrls: ['./main-page.scss'],
})
export class MainPage {
  currentIndex = 0;

  slides = [
    {
      image: '/airportImage.svg',
      title: 'Авиакомпания Ямал',
      desc: 'входная группа'
    },
    {
      image: '/ticketImage.svg',
      title: 'Авиакомпания Ямал',
      desc: 'авиабилеты'
    },
    {
      image: '/planeImage.svg',
      title: 'Авиакомпания Ямал',
      desc: 'юбилейный самолет'
    },
    {
      image: '/Авиакомпания Ямал снекбокс.jpeg',
      title: 'Авиакомпания Ямал снекбокс',
      desc: ''
    },
    {
      image: '/Выставка в аэропорту Нового Уренгоя 3.jpeg',
      title: 'Выставка в аэропорту Нового Уренгоя',
      desc: ''
    },
    {
      image: '/Выставка в аэропорту Нового Уренгоя 5.jpeg',
      title: 'Выставка в аэропорту Нового Уренгоя',
      desc: ''
    },
  ];

  get dotsCount(): number {
    return Math.max(1, this.slides.length - 3 + 1);
  }

  get visibleSlides() {
    return this.slides.slice(
      this.currentIndex,
      this.currentIndex + 3
    );
  }

  setSlideByDot(i: number) {
    this.currentIndex = i;
  }

  nextSlide() {
    if (this.currentIndex < this.slides.length - 3) {
      this.currentIndex++;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
