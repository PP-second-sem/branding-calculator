import { Component, Input, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Template, TextField } from '../../models/layout.model';
import { CommonModule } from '@angular/common';
import { QrCode } from '../qr-code/qr-code';

@Component({
  selector: 'app-layout-preview',
  imports: [CommonModule, QrCode],
  templateUrl: './layout-preview.html',
  styleUrl: './layout-preview.scss',
})
export class LayoutPreview {
  @Input() template!: Template;
  @ViewChild('image', { static: true })
  public image!: ElementRef<HTMLImageElement>;
  @ViewChild('preview', { static: true })
  public preview!: ElementRef<HTMLElement>;
  @Input() fullName: string = '';
  @Input() position: string = ''; 
  @Input() phone: string = ''; 
  @Input() mobilePhone: string = ''; 
  @Input() email: string = '';
  @Input() address: string = '';  
  @Input() qrCode1 = '';
  @Input() qrCode1Label = '';
  @Input() qrCode2 = '';
  @Input() qrCode2Label = '';
  @Input() qrCodesGenerated = false;
  @Input() qrCode2Enabled = false;
  @Input() qrCode1Enabled = false;

  public get fullNameField(): TextField | undefined {
    return this.template.textFields.find(
        field => field.type === 'fullName'
    );
  };

  public get positionField(): TextField | undefined {
    return this.template.textFields.find(
      field => field.type === 'position'
    );
  };

  public get phoneField(): TextField | undefined {
    return this.template.textFields.find(
      field => field.type === 'phone'
    );
  }

  public get mobilePhoneField(): TextField | undefined {
    return this.template.textFields.find(
      field => field.type === 'mobilePhone'
    );
  }

  public get emailField(): TextField | undefined {
    return this.template.textFields.find(
      field => field.type === 'email'
    );
  }

  public get addressField(): TextField | undefined {
    return this.template.textFields.find(
      field => field.type === 'address'
    );
  };

  public formatAddress(address: string): string[] {
    const words = address.trim().split(/\s+/);
    const lines: string[] = [];
    let currentLine = '';

    for (const word of words) {
        const nextLine = currentLine
            ? `${currentLine} ${word}`
            : word;

        if (nextLine.length <= 34) {
            currentLine = nextLine;
        } else {
            if (currentLine) {
                lines.push(currentLine);
            }

            currentLine = word;
        }
    }

    if (currentLine) {
        lines.push(currentLine);
    }

    return lines;
  }

  public formatFullName(fullName: string): string[] {
    const words = fullName.trim().split(/\s+/);

    if (words.length <= 1) {
        return words;
    }

    const lastName = words[0];
    const firstName = words[1];
    const patronymic = words[2];

    if (!patronymic) {
        return [
            lastName,
            firstName,
        ];
    }

    const secondLine = `${firstName} ${patronymic}`;

    if (secondLine.length <= 25) {
        return [
            lastName,
            secondLine,
        ];
    }

    return [
        lastName,
        `${firstName[0]}. ${patronymic[0]}.`,
    ];
  }

  public getShortFullNameLeft(): number {
    const field = this.fullNameField;

    if (!field) {
        return 0;
    }

    return field.x + field.width / 2;
  }

  public isShortFullName(fullName: string): boolean {
    const words = fullName.trim().split(/\s+/);

    if (words.length < 3) {
        return false;
    }

    return `${words[1]} ${words[2]}`.length > 25;
  }
}
