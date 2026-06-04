import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import html2canvas from 'html2canvas';
import { templates } from '../../mock/templates';
import { MainHeaderComponent } from '../../components/main-header.component/main-header.component';

@Component({
  selector: 'app-editor',
  imports: [CommonModule, FormsModule, MainHeaderComponent],
  templateUrl: './editor.html',
  styleUrl: './editor.scss',
})
export class Editor implements OnInit {
  private route = inject(ActivatedRoute);
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
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const found = templates.find(item => item.id === id);

    console.log('ROUTE ID:', id);
    console.log('TEMPLATE:', found);

    if (!found) return;

    this.setTemplate(found);
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

  public downloadTemplate(): void {
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

      const link = document.createElement('a');
      link.download = 'template.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
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
}