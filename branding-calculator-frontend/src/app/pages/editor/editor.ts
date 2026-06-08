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

  getLogoSize(logo: string) {

    return this.template.logoSizes?.[logo];
  }

  public handleDownload(): void {

    const wrapper = document.querySelector(
      '.editor-export-wrapper'
    ) as HTMLElement;

    const element = document.querySelector(
      '.editor-export'
    ) as HTMLElement;

    const exportScale = this.getExportScale();

    html2canvas(element, {
      scale: exportScale,
      useCORS: true,
      backgroundColor: null
    }).then(canvas => {

      const link = document.createElement('a');
      link.download = `template.${this.selectedFormat}`;

      if (this.selectedFormat === 'png') {
        canvas.toBlob(blob => {
          if (!blob) return;
          link.href = URL.createObjectURL(blob);
          link.click();
        }, 'image/png');
      }

      if (this.selectedFormat === 'jpeg') {
        canvas.toBlob(blob => {
          if (!blob) return;
          link.href = URL.createObjectURL(blob);
          link.click();
        }, 'image/jpeg', 0.95);
      }

    });
  }

  getExportScale(): number {
    if (!this.template?.exportSize) return 1;

    return this.template.exportSize.width / this.template.width;
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

  getExportSize() {
    switch (this.template.id) {
      case 1:
        return { w: 1150, h: 591 };

      case 2:
        return { w: 709, h: 1063 };

      case 3:
        return { w: 2480, h: 3508 };

      default:
        return { w: this.template.width, h: this.template.height };
    }
  }

  getLogoSrc(logo: string): string {
    return this.template?.logos?.[logo] ?? '';
  }

  getLogoPosition(index: number, logo: string) {
    let position;

    if (this.activeLogos.length === 1) {
      position = this.template.logoPositions.single;
    } else {
      position = index === 0 
        ? this.template.logoPositions.first 
        : this.template.logoPositions.second;
    }

    const size = this.getLogoSize(logo);

    return {
      x: position.x,
      y: position.y - size.height
    };
  }

  formatFio(value: string, templateId?: number) {
    if (!value) return { line1: '', line2: '' };

    const parts = value.trim().split(' ').filter(Boolean);

    const lastName = parts[0] || '';
    const firstName = parts[1] || '';
    const middleName = parts[2] || '';

    if (templateId === 1 || templateId === 2 || templateId === 4) {
      return {
        line1: `${lastName}`,
        line2: `${firstName}`
      };
    }

    if (templateId === 3) {
      return {
        line1: `${lastName} ${firstName}`,
        line2: `${middleName}`
      };
    }

    return {
      line1: value,
      line2: ''
    };
  }



  saveLayout(file: File) {

    const json = {
      templateId: this.template.id,
      formData: this.formData,
      activeLogos: this.activeLogos,
      photo: this.photoPreview,
      fields: this.template.fields
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
}