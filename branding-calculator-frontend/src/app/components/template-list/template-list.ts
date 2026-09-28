import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Template } from '../../models/layout.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-list',
  imports: [CommonModule],
  templateUrl: './template-list.html',
  styleUrl: './template-list.scss',
})
export class TemplateList {
  @Input() categoryName = '';
  @Input({ required: true })
  public templates: Template[] = [];

  @Input({ required: true })
  public selectedTemplate!: Template;

  @Output()
  public templateSelected = new EventEmitter<Template>();

  public selectTemplate(template: Template): void {
    this.templateSelected.emit(template);
  }

  public selectPreviousTemplate(): void {
    const currentIndex = this.templates.indexOf(this.selectedTemplate);

    if (currentIndex > 0) {
      this.selectTemplate(this.templates[currentIndex - 1]);    
    }
  }

  public selectNextTemplate(): void {
    const currentIndex = this.templates.indexOf(this.selectedTemplate);

    if (currentIndex < this.templates.length - 1) {
      this.selectTemplate(this.templates[currentIndex + 1]);
    }
  }
}