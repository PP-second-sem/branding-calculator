import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import html2canvas from 'html2canvas';
import { templates } from '../../mock/templates';
import { MainHeaderComponent } from '../../components/main-header.component/main-header.component';
import { LogoService } from '../../services/logo-service/logo-service';
import { GeneratedService } from '../../services/generated-service/generated.service';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-editor',
  imports: [CommonModule, FormsModule, MainHeaderComponent],
  templateUrl: './editor.html',
  styleUrl: './editor.scss',
})
export class Editor implements OnInit {
  private logoService: LogoService = inject(LogoService);
  public logos: any[] = [];
  private route = inject(ActivatedRoute);
  private generatedService: GeneratedService = inject(GeneratedService);
  public previewFields: any[] = [];
  public photoPreview: string = '';
  public avatarPreview: string = '';
  public isCarrierOpen = true;
  public isCityOpen = true;
  public isLogoOpen = true;
  public isPreviewOpen = true;
  public isFormatOpen = true;
  public template: any;
  public formData: any = {};
  public scale = 324 / 640;
  public http: HttpClient = inject(HttpClient);
  public selectedFormat: 'png' | 'jpeg' | 'pdf' | 'svg' = 'png';

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const found = templates.find(item => item.id === id);

    console.log('ROUTE ID:', id);
    console.log('TEMPLATE:', found);

    if (!found) return;

    this.setTemplate(found);
    this.loadLogos();
  }

  loadLogos() {
    this.logoService.getAll().subscribe({
      next: (res) => {
        this.logos = res;
        console.log('LOGOS:', res);
      }
    });
  }

  getLogoUrl(logo: any): string {
    return logo.filePath
      ? `/api/LogoLibrary/${logo.id}/download`
      : '/placeholder.svg';
  }

  // get activeLogos() {
  //   return this.logos.filter(l => l.isActive);
  // }

  onPhotoSelected(event: any): void {
    const file = event.target.files[0];

    if (!file) return;

    this.photoPreview = URL.createObjectURL(file);
  }

  public onFileSelected(event: any): void {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      this.avatarPreview = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  // public downloadTemplate(): void {
  //   const wrapper = document.querySelector(
  //     '.editor-export-wrapper'
  //   ) as HTMLElement;

  //   wrapper.style.transform = 'none';

  //   const element = document.querySelector(
  //     '.editor-export'
  //   ) as HTMLElement;

  //   html2canvas(element, {
  //     scale: 4,
  //     useCORS: true,
  //     backgroundColor: null
  //   }).then(canvas => {
  //     wrapper.style.transform = 'scale(0.50625)';

  //     const link = document.createElement('a');
  //     link.download = 'template.png';
  //     link.href = canvas.toDataURL('image/png');
  //     link.click();
  //   });
  // }
  public handleDownload(): void {

    const wrapper = document.querySelector(
      '.editor-export-wrapper'
    ) as HTMLElement;

    wrapper.style.transform = 'none';

    const element = document.querySelector(
      '.editor-export'
    ) as HTMLElement;

    html2canvas(element, {
      scale: 4,
      useCORS: true,
      backgroundColor: null
    }).then(canvas => {

      wrapper.style.transform = 'scale(0.50625)';

      switch (this.selectedFormat) {

        case 'png':

          canvas.toBlob((blob) => {

            if (!blob) return;

            const file = new File(
              [blob],
              'template.png',
              { type: 'image/png' }
            );

            this.saveLayout(file);

            const link = document.createElement('a');
            link.download = 'template.png';
            link.href = URL.createObjectURL(blob);
            link.click();

          }, 'image/png');

          break;

        case 'jpeg':

          canvas.toBlob((blob) => {

            if (!blob) return;

            const file = new File(
              [blob],
              'template.jpg',
              { type: 'image/jpeg' }
            );

            this.saveLayout(file);

            const link = document.createElement('a');
            link.download = 'template.jpg';
            link.href = URL.createObjectURL(blob);
            link.click();

          }, 'image/jpeg', 0.95);

          break;

        case 'pdf':

          const pdf = new jsPDF({
            orientation: canvas.width > canvas.height
              ? 'landscape'
              : 'portrait',
            unit: 'px',
            format: [canvas.width, canvas.height]
          });

          pdf.addImage(
            canvas.toDataURL('image/png'),
            'PNG',
            0,
            0,
            canvas.width,
            canvas.height
          );

          const pdfBlob = pdf.output('blob');

          const pdfFile = new File(
            [pdfBlob],
            'template.pdf',
            { type: 'application/pdf' }
          );

          this.saveLayout(pdfFile);

          pdf.save('template.pdf');

          break;

        // case 'svg': {
        //   try {
        //     const width = this.template?.width || 640;
        //     const height = this.template?.height || 480;

        //     // Функция защиты от XSS инъекций в XML
        //     const escapeXml = (unsafe: string): string => {
        //       return unsafe.replace(/[<>&'"]/g, (c) => {
        //         switch (c) {
        //           case '<': return '&lt;';
        //           case '>': return '&gt;';
        //           case '&': return '&amp;';
        //           case '\'': return '&apos;';
        //           case '"': return '&quot;';
        //           default: return c;
        //         }
        //       });
        //     };

        //     const fields = this.template?.fields || [];
        //     const texts = fields
        //       .filter((f: any) => 
        //         f.type === 'text' && 
        //         f.x !== undefined && 
        //         f.y !== undefined
        //       )
        //       .map((f: any) => {
        //         const rawValue = this.formData[f.key] ?? '';
        //         const lines = String(rawValue).split('\n');
                
        //         // Корректный перенос строк для ФИО
        //         const tspans = lines
        //           .map((line, index) => {
        //             const escapedLine = escapeXml(line);
        //             return `<tspan x="${f.x}" ${index > 0 ? `dy="1.2em"` : ''}>${escapedLine}</tspan>`;
        //           })
        //           .join('');

        //         // Строка без лишних пробелов форматирования JS
        //         return `<text x="${f.x}" y="${f.y}" font-size="${f.fontSize || 12}" font-weight="${f.fontWeight || 400}" fill="${f.color || '#000'}" font-family="Arial, sans-serif">${tspans}</text>`;
        //       })
        //       .join('');

        //     // Сборка финального SVG в одну строку (критично для XML парсеров) + белая подложка rect
        //     const svgContent = `<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="#ffffff"/>${texts}</svg>`.trim();

        //     const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });

        //     // 1. Сразу отдаем файл пользователю на скачивание
        //     const url = URL.createObjectURL(blob);
        //     const link = document.createElement('a');
        //     link.href = url;
        //     link.download = 'template.svg';
        //     link.click();
            
        //     setTimeout(() => URL.revokeObjectURL(url), 150);

        //     // 2. Изолированно отправляем на бэкенд (если упадет — скачивание не сломается)
        //     try {
        //       const svgFile = new File([blob], 'template.svg', { type: 'image/svg+xml' });
        //       this.saveLayout(svgFile);
        //     } catch (saveError) {
        //       console.error('Ошибка сохранения SVG на сервере:', saveError);
        //     }

        //   } catch (err) {
        //     console.error('Критическая ошибка генерации SVG:', err);
        //   }
          
        //   break;
        // }
      }
    });

  }

  setTemplate(template: any) {
    this.template = template;

    this.formData = {};

    template.fields.forEach((field: any) => {
      if (field.type === 'select') {
        this.formData[field.key] = 'none';
      } else if (field.type === 'text') {
        this.formData[field.key] = '';
      } else {
        this.formData[field.key] = null;
      }
    });
  }

  get carrierFields() {
    return this.template?.fields?.filter((f: any) => f.group === 'carrier') || [];
  }

  get logoCount(): number {
    let count = 0;

    if (this.formData.cover1 && this.formData.cover1 !== 'none') count++;
    if (this.formData.cover2 && this.formData.cover2 !== 'none') count++;

    return count;
  }

  get locationFields() {
    return this.template?.fields?.filter((f: any) => f.group === 'location') || [];
  }

  get logoFields() {
    return this.template?.fields?.filter((f: any) => f.group === 'logo') || [];
  }

  get previewScale(): number {
    if (!this.template) return 1;

    const maxWidth = 324;
    const maxHeight = 180;

    return Math.min(
      maxWidth / this.template.width,
      maxHeight / this.template.height
    );
  }

  get hasTwoLogos(): boolean {
    return this.formData?.cover1 && this.formData?.cover1 !== 'none'
        && this.formData?.cover2 && this.formData?.cover2 !== 'none';
  }

  get activeLogos(): string[] {
    const logos = [];

    if (this.formData.cover1 && this.formData.cover1 !== 'none') {
      logos.push(this.formData.cover1);
    }

    if (this.formData.cover2 && this.formData.cover2 !== 'none') {
      logos.push(this.formData.cover2);
    }

    return logos;
  }

  getLogoPosition(index: number) {
    if (this.activeLogos.length === 1) {
      return this.template.logoPositions.single;
    }

    return index === 0
      ? this.template.logoPositions.first
      : this.template.logoPositions.second;
  }

  formatFio(value: string): string {
    if (!value) return '';

    const parts = value.trim().split(' ').filter(Boolean);

    const firstName = parts[0] || '';
    const lastName = parts[1] || '';

    return `${firstName}\n${lastName}`;
  }

  saveLayout(file: File) {

    const json = {
      templateId: this.template.id,
      formData: this.formData,
      activeLogos: this.activeLogos,
      photo: this.photoPreview
    };

    const formData = new FormData();

    formData.append('CarrierTypeId', String(this.template.id));
    formData.append('JsonContent', JSON.stringify(json));

    formData.append('Files', file);
    console.log('TEMPLATE ID:', this.template.id);
    console.log('JSON:', json);
    console.log('FILE:', file);
    console.log(JSON.stringify(json));

    this.generatedService.saveUserLayout(formData)
      .subscribe({
        next: () => console.log('OK'),
        error: err => console.error('SAVE ERROR:', err)
      });
  }

  // handleDownload() {
  //   this.saveLayout();
  //   this.downloadTemplate();
  // }
}