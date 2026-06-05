import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { QuestionService } from '../../../services/question-service/question-service';
import { FormsModule } from '@angular/forms';
import { MaterialService } from '../../../services/material-service/material.service';
import { LogoService } from '../../../services/logo-service/logo-service';

@Component({
  selector: 'app-admin-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.scss',
})
export class AdminPage implements OnInit {

  activeTab: 'layouts' | 'questions' | 'addingCatalog' | 'addingLogotype' = 'layouts';

  private questionService: QuestionService = inject(QuestionService);
  private materialService: MaterialService = inject(MaterialService);
  private logoService: LogoService = inject(LogoService);
  logoForm = {
    name: '',
    isActive: true,
    sortOrder: 0
  };

  selectedLogoFile: File | null = null;
  questions: any[] = [];

  ngOnInit() {
    this.load();
  }

  load() {
    this.questionService.getAllQuestions()
      .subscribe((res: any) => {
        this.questions = res; // 👈 БЕЗ МАПЫ
      });
  }

  answerQuestion(q: any, text: string) {
    this.questionService.answerQuestion(q.id, text)
      .subscribe({
        next: () => this.load(),
        error: (err) => console.log(err)
      });
  }

    catalogForm = {
    name: '',
    category: '',
    tags: '',
    description: ''
  };

  selectedFile: File | null = null;
  onTemplateSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  clearCatalogForm() {
    this.catalogForm = {
      name: '',
      category: '',
      tags: '',
      description: ''
    };

    this.selectedFile = null;
  }

  addTemplate() {

    if (!this.selectedFile) {
      return;
    }

    const formData = new FormData();

    formData.append('Name', this.catalogForm.name);
    formData.append('Category', this.catalogForm.category);
    formData.append('Sphere', this.catalogForm.tags);
    formData.append('Description', this.catalogForm.description);

    formData.append('City', '');
    formData.append('Color', '');
    formData.append('PreviewUrl', '');

    formData.append('File', this.selectedFile);

    this.materialService.create(formData)
      .subscribe({
        next: () => {
          this.clearCatalogForm();
        }
      });
  }

  onLogoSelected(event: any) {
    this.selectedLogoFile = event.target.files[0];
  }

  clearLogoForm() {
    this.logoForm = {
      name: '',
      isActive: true,
      sortOrder: 0
    };

    this.selectedLogoFile = null;
  }

  addLogo() {
    if (!this.selectedLogoFile) return;

    const formData = new FormData();

    formData.append('Name', this.logoForm.name);
    formData.append('IsActive', String(this.logoForm.isActive));
    formData.append('SortOrder', String(this.logoForm.sortOrder));
    formData.append('File', this.selectedLogoFile);

    this.logoService.add(formData).subscribe({
      next: () => {
        this.clearLogoForm();
        console.log('Логотип добавлен');
      },
      error: (err) => {
        console.error('Ошибка загрузки логотипа', err);
      }
    });
  }
}