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
  @Input() layoutName = '';
  @Input() fullName: string = '';
  @Input() recipientName: string = '';
  @Input() position: string = ''; 
  @Input() phone: string = ''; 
  @Input() certificateText: string = '';
  @Input() mobilePhone: string = ''; 
  @Input() email: string = '';
  @Input() address: string = '';  
  @Input() city = '';
  @Input() date = '';
  @Input() qrCode1 = '';
  @Input() qrCode1Label = '';
  @Input() qrCode2 = '';
  @Input() qrCode2Label = '';
  @Input() qrCodesGenerated = false;
  @Input() qrCode2Enabled = false;
  @Input() qrCode1Enabled = true;
  @Input() showPhone = true;
  @Input() showAddress = true;

  public get fullNameField(): TextField | undefined {
    return this.template.textFields.find(
        field => field.type === 'fullName'
    );
  };

  public get certificateTextField(): TextField | undefined {
    return this.template.textFields.find(
        field => field.type === 'certificateText'
    );
  };

  public get recipientNameField(): TextField | undefined {
    return this.template.textFields.find(
        field => field.type === 'recipientName'
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


    if (lines.length > 1 && /^(д\.?|кв\.?)\s/i.test(lines[lines.length - 1])) {
      const lastLine = lines[lines.length - 1];
      const previousLine = lines[lines.length - 2];

      if (`${previousLine} ${lastLine}`.length <= 42) {
          lines[lines.length - 2] = `${previousLine} ${lastLine}`;
          lines.pop();
      }
    }

    return lines;
  }

  public formatFullName(fullName: string): string[] {
    const words = fullName.trim().split(/\s+/).filter(Boolean);

    if (words.length === 0) {
      return [];
    }

    if (this.layoutName === 'Бейджи' && (this.template.id === 2 || this.template.id === 3)) {
      const surname = (words[0] ?? '').slice(0, 20);
      const firstName = (words[1] ?? '').slice(0, 15);
      const patronymic = (words[2] ?? '').slice(0, 15);

      if (!firstName && !patronymic) {
        return [surname].filter(Boolean);
      }

      if (`${surname} ${firstName}`.length > 23) {
        return [surname, firstName, patronymic].filter(Boolean);
      }

      if (!patronymic) {
        return [surname, firstName].filter(Boolean);
      }

      return [`${surname} ${firstName}`, patronymic];
    }

    const surname = words[0].slice(0, 20);
    const firstName = (words[1] ?? '').slice(0, 15);
    const patronymic = (words[2] ?? '').slice(0, 15);

    if (this.layoutName === 'Визитки') {
      if (!firstName) {
        return [surname];
      }

      if (!patronymic) {
        return [surname, firstName];
      }

      const secondLine = `${firstName} ${patronymic}`;

      if (secondLine.length <= 23) {
        return [surname, secondLine];
      }

      return [surname, `${firstName[0]}. ${patronymic[0]}.`];
    }

    if (this.layoutName === 'Бейджи' && this.template.id === 1) {
      if (surname.length > 15) {
        return [
          surname.slice(0, 15),
          surname.slice(15),
          ...[firstName, patronymic].filter(Boolean)
        ];
      }

      if (!firstName && !patronymic) {
        return [surname];
      }

      if (!patronymic) {
        return [surname, firstName].filter(Boolean);
      }

      return [`${surname} ${firstName}`.trim(), patronymic];
    }

    if (
      (this.layoutName === 'Бейджи' || this.layoutName === 'Дипломы') &&
      this.template.splitPatronymic
    ) {
      if (words.length < 3) {
        return [fullName];
      }

      return [`${surname} ${firstName}`, patronymic];
    }

    if (words.length <= 1) {
      return [surname];
    }

    if (
      this.layoutName === 'Сертификаты' &&
      this.template.id !== 2 &&
      this.template.id !== 3
    ) {
      return [fullName];
    }

    if (!patronymic) {
      return [surname, firstName].filter(Boolean);
    }

    const secondLine = `${firstName} ${patronymic}`;

    if (secondLine.length <= 15) {
      return [surname, secondLine];
    }

    return [surname, `${firstName[0]}. ${patronymic[0]}.`];
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

  public get cityField(): TextField | undefined {
    return this.template.textFields.find(
      field => field.type === 'city'
    );
  }

  public get dateField(): TextField | undefined {
    return this.template.textFields.find(
      field => field.type === 'date'
    );
  }

  public hasWrappedSurname(fullName: string): boolean {
    const surname = fullName.trim().split(/\s+/)[0] ?? '';

    return this.layoutName === 'Бейджи'
      && this.template.id === 1
      && surname.length > 16;
  }
}
