import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  closeModal() {
    this.close.emit();
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
}