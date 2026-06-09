import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { templates } from '../../mock/templates';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-layout-preview-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout-preview-modal.html',
  styleUrls: ['./layout-preview-modal.scss']
})
export class LayoutPreviewModal {

  @Input() layout: any;
  @Input() formData: any;

  @Output() close = new EventEmitter<void>();

  @ViewChild('previewRef') previewRef!: ElementRef;

  previewUrl: string | null = null;

  closeModal() {
    this.close.emit();
  }

  generatePreview() {
    if (!this.previewRef) return;

    html2canvas(this.previewRef.nativeElement, {
      scale: 2,
      useCORS: true,
      backgroundColor: null
    }).then(canvas => {
      this.previewUrl = canvas.toDataURL('image/png');
    });
  }

  formatFio(value: string, templateId?: number) {
    if (!value) return { line1: '', line2: '' };

    const parts = value.trim().split(' ').filter(Boolean);

    const lastName = parts[0] || '';
    const firstName = parts[1] || '';
    const middleName = parts[2] || '';

    if (templateId === 1) {
      return {
        line1: lastName,
        line2: firstName
      };
    }

    if (templateId === 3) {
      return {
        line1: `${lastName} ${firstName}`,
        line2: middleName
      };
    }

    return {
      line1: value,
      line2: ''
    };
  }

  get template(): any {

    if (!this.layout?.templateData) {
      return null;
    }

    return templates.find(
      x => x.id === this.layout.templateData.templateId
    );
  }
}