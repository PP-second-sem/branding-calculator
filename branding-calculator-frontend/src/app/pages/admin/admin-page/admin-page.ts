import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { QuestionService } from '../../../services/question-service/question-service';
import { FormsModule } from '@angular/forms';
import { MaterialService } from '../../../services/material-service/material.service';
import { LogoService } from '../../../services/logo-service/logo-service';
import { AuthService } from '../../../services/auth-service/auth.service';
import { Router } from '@angular/router';
import { LayoutPreviewModal } from '../../../components/layout-preview-modal/layout-preview-modal';
import { GeneratedService } from '../../../services/generated-service/generated.service';
import { forkJoin, map, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import html2canvas from 'html2canvas';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  imports: [CommonModule, FormsModule, LayoutPreviewModal],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.scss',
})
export class AdminPage implements OnInit {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  activeTab: 'layouts' | 'questions' | 'addingCatalog' | 'addingLogotype' = 'layouts';
  private questionService: QuestionService = inject(QuestionService);
  private materialService: MaterialService = inject(MaterialService);
  private logoService: LogoService = inject(LogoService);
  private generatedService: GeneratedService = inject(GeneratedService);
  public http: HttpClient = inject(HttpClient);
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  public successMessage = '';
  logoForm = {
    name: '',
    isActive: true,
    sortOrder: 0
  };

  selectedLayout: any = null;
  layouts: any = [];
  openLayoutCard(layout: any) {

    this.generatedService.getLayoutJson(layout.guid)
      .subscribe({
        next: (json: any) => {

          const parsed = typeof json === 'string'
            ? JSON.parse(json)
            : json;

          this.selectedLayout = {
            templateData: parsed
          };
        },

        error: err => console.error(err)
      });
  }

  selectedLogoFile: File | null = null;
  questions: any[] = [];

  ngOnInit() {
    this.loadLayouts();
    this.loadQuestions();
    // this.loadMaterials(); 
  }

  getLayoutTitle(layout: any): string {
    const id = layout?.metadata.templateId;

    switch (id) {
      case 2:
        return 'Визитка';

      case 4:
        return 'Бейдж';

      case 5:
        return 'Грамота';

      case 3:
        return 'Бейдж с фото';

      default:
        return 'Макет';
    }
  }

  loadQuestions() {
    this.questionService.getAllQuestions()
      .subscribe((res: any) => {
        this.questions = [...res];
        this.cdr.detectChanges();
      });
  }

  loadMaterials() {
    this.materialService.getMyLayouts()
      .subscribe({
        next: (res: any) => {
          this.layouts = res;

        },
        error: (err) => console.error(err)
      });
  }

  answerQuestion(q: any, text: string) {
    this.questionService.answerQuestion(q.id, text)
      .subscribe({
        next: () => {
          this.loadQuestions();
        },
        error: (err) => console.log(err)
      });
  }

  catalogForm = {
    name: '',
    category: '',
    description: '',

    sphere: '',
    city: '',
    color: ''
  };

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.authService.clearSession();
        this.router.navigate(['/']);
      },
      error: () => {
        this.authService.clearSession();
        this.router.navigate(['/']);
      }
    });
  }

  public goHome() {
    this.router.navigateByUrl('/')
  }

  selectedFile: File | null = null;
  onTemplateSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  clearCatalogForm() {
    this.catalogForm = {
      name: '',
      category: '',
      description: '',

      sphere: '',
      city: '',
      color: ''
    };

    this.selectedFile = null;
  }

  addTemplate() {

    if (!this.selectedFile) {
      return;
    }
    console.log('click')

    const formData = new FormData();

    formData.append('Name', this.catalogForm.name);
    formData.append('Category', this.catalogForm.category);
    formData.append('Sphere', this.catalogForm.sphere);
    formData.append('Description', this.catalogForm.description);

    formData.append('City', this.catalogForm.city);
    formData.append('Color', this.catalogForm.color);

    formData.append('File', this.selectedFile);

    this.materialService.create(formData)
      .subscribe({
        next: () => {
          this.clearCatalogForm();
          this.successMessage = 'Макет опубликован';
          // this.cdr.detectChanges()
          this.cdr.markForCheck();
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

  loadLayouts() {
    this.http.get<any[]>('/api/GeneratedLayout/userLayouts/mine')
    .pipe(
      switchMap(layouts => {

        const requests = layouts.map(layout =>
          this.http.get<any>(
            `/api/GeneratedLayout/userLayout/${layout.guid}/metadata`
          ).pipe(
            map(metadata => ({
              ...layout,
              metadata
            }))
          )
        );

        return forkJoin(requests);
      })
    )
    .subscribe(result => {
      console.log('LAYOUTS RESULT:', result);
      this.layouts = [...result];
      this.cdr.markForCheck();
    });
  }

  openLayout(layout: any) {
    console.log('LAYOUT:', layout);
    console.log('METADATA:', layout?.metadata);
    console.log('TEMPLATE DATA:', layout?.templateData);
    this.selectedLayout = layout;
  }

  downloadLayout(layout: any, event: MouseEvent) {

    event.stopPropagation();

    const url = `/api/GeneratedLayout/userLayout/${layout.guid}`;

    const link = document.createElement('a');
    link.href = url;
    link.download = `${layout.guid}.zip`;
    link.click();
  }

  renderAndDownload(json: any, guid: string) {

    const element = document.querySelector('.layout-export-temp') as HTMLElement;

    html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: null
    }).then(canvas => {

      canvas.toBlob(blob => {
        if (!blob) return;

        const link = document.createElement('a');
        link.download = `layout-${guid}.png`;
        link.href = URL.createObjectURL(blob);
        link.click();

      }, 'image/png');

    });
  }

}