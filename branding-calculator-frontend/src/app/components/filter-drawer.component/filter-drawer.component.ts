import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, HostListener, ElementRef, inject } from '@angular/core';
import { IFilterState } from '../../models/filter-state.model';

@Component({
  selector: 'app-filter-drawer',
  imports: [CommonModule],
  templateUrl: './filter-drawer.component.html',
  styleUrl: './filter-drawer.component.scss',
})
export class FilterDrawer {
  public filtersDraft: IFilterState = {
    sphere: [],
    formats: [],
    cities: [],
    colors: []
  };

  @Input() isOpen = false;
  @Input() categories: { label: string; value: string }[] = [];
  
  @Output() apply = new EventEmitter<any>();
  @Output() closeDrawer = new EventEmitter<void>();

  private el: ElementRef = inject(ElementRef);

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.isOpen) return;

    const target = event.target as Node;
    const clickedInside = this.el.nativeElement.contains(target);

    if (!clickedInside) {
      this.closeDrawer.emit();
    }
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    this.closeDrawer.emit();
  }

  public onApply(): void { 
    console.log(this.filtersDraft);
    this.apply.emit(this.filtersDraft);

  }

  public toggleCategory(value: string): void {
    const arr = this.filtersDraft.sphere;

    const index = arr.indexOf(value);

    if (index === -1) {
      arr.push(value);
    } else {
      arr.splice(index, 1);
    }
  }

  public toggleFormat(value: string): void {
    const arr = this.filtersDraft.formats;

    const index = arr.indexOf(value);

    if (index === -1) {
      arr.push(value);
    } else {
      arr.splice(index, 1);
    }
  }

  public toggleCities(value: string): void {
    const arr = this.filtersDraft.cities;

    const index = arr.indexOf(value);

    if (index === -1) {
      arr.push(value);
    } else {
      arr.splice(index, 1);
    }
  }

  public toggleColors(value: string): void {
    const arr = this.filtersDraft.colors;

    const index = arr.indexOf(value);

    if (index === -1) {
      arr.push(value);
    } else {
      arr.splice(index, 1);
    }
  }

  public onReset(): void {
    this.filtersDraft = {
      formats: [],
      cities: [],
      colors: [],
      sphere: []
    }
  }
}
