import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Placeholder } from '../placeholder/placeholder';
import { FormsModule } from '@angular/forms';
import { ViewChild } from '@angular/core';
import type { CertificateWording, TemplateData } from '../../models/layout.model';
import type { QrCodeEntry } from '../../models/qr-code.model';

@Component({
  selector: 'app-data-tabs',
  imports: [Placeholder, CommonModule, FormsModule],
  templateUrl: './data-tabs.html',
  styleUrl: './data-tabs.scss',
})
export class DataTabs {
  public activeTab = 'personal';
  public fullName = '';
  public position = '';
  public phone = '';
  public mobilePhone = '';
  public email = '';
  public address = '';
  public city = '';
  public date = '';
  public recipientName = '';
  public certificateText = '';
  public eventType = '';
  public eventShortDescription = '';
  public eventDescription = '';
  public eventPlace = '';
  public eventDate = '';
  public eventTime = '';
  public eventAgeLimit = '';
  public eventAdditionalInfo = '';

  @Output() cityChange = new EventEmitter<string>();
  @Output() dateChange = new EventEmitter<string>();
  @ViewChild('fullNameInput') fullNameInput?: Placeholder;
  @Input() layoutName = '';
  @Input() qrCodeEntries: QrCodeEntry[] = [];
  @Output() qrCodeEntriesChange = new EventEmitter<QrCodeEntry[]>();
  @Input() showPhone = true;
  @Input() showAddress = true;
  @Input() templateId = 0;
  @Input() certificateWording?: CertificateWording;
  @Output() certificateWordingChange = new EventEmitter<CertificateWording>();
  @Input() eventEndDate = '';

  @Output() showPhoneChange = new EventEmitter<boolean>();
  @Output() showAddressChange = new EventEmitter<boolean>();
  @Output() fullNameChange = new EventEmitter<string>();
  @Output() positionChange = new EventEmitter<string>();
  @Output() recipientNameChange = new EventEmitter<string>();
  @Output() certificateTextChange = new EventEmitter<string>();
  @Output() phoneChange = new EventEmitter<string>();
  @Output() mobilePhoneChange = new EventEmitter<string>();
  @Output() emailChange = new EventEmitter<string>();
  @Output() addressChange = new EventEmitter<string>();
  @Output() eventTypeChange = new EventEmitter<string>();
  @Output() eventShortDescriptionChange = new EventEmitter<string>();
  @Output() eventDescriptionChange = new EventEmitter<string>();
  @Output() eventPlaceChange = new EventEmitter<string>();
  @Output() eventDateChange = new EventEmitter<string>();
  @Output() eventTimeChange = new EventEmitter<string>();
  @Output() eventAgeLimitChange = new EventEmitter<string>();
  @Output() eventAdditionalInfoChange = new EventEmitter<string>();
  @Output() eventEndDateChange = new EventEmitter<string>();

  public syncData(data: TemplateData): void {
    this.fullName = data.fullName;
    this.position = data.position;
    this.phone = data.phone ?? '';
    this.mobilePhone = data.mobilePhone ?? '';
    this.email = data.email ?? '';
    this.address = data.address ?? '';
    this.city = data.city ?? '';
    this.date = data.date ?? '';
    this.recipientName = data.recipientName ?? '';
    this.certificateText = data.certificateText ?? ''; 
    this.eventType = data.eventType ?? '';
    this.eventShortDescription = data.eventShortDescription ?? '';
    this.eventDescription = data.eventDescription ?? '';
    this.eventPlace = data.eventPlace ?? '';
    this.eventDate = data.eventDate ?? '';
    this.eventTime = data.eventTime ?? '';
    this.eventAgeLimit = data.eventAgeLimit ?? '';
    this.eventAdditionalInfo = data.eventAdditionalInfo ?? ''; 
    
    

    if (this.fullNameInput) {
      this.fullNameInput.value = data.fullName;
    }
  }

  public setFullName(value: string): void {
    this.fullName = value;
    this.fullNameChange.emit(value);
  }

  public setPosition(value: string): void {
    this.position = value;
    this.positionChange.emit(value);
  }

  public setPhone(value: string): void {
    this.phone = value;
    this.phoneChange.emit(value);
  }

  public setMobilePhone(value: string): void {
    this.mobilePhone = value;
    this.mobilePhoneChange.emit(value);
  }

  public setEmail(value: string): void {
    this.email = value;
    this.emailChange.emit(value);
  }

  public setAddress(value: string): void {
    this.address = value;
    this.addressChange.emit(value);
  }

  public addQrCode(): void {
    if (this.qrCodeEntries.length < 2) {
      this.qrCodeEntriesChange.emit([...this.qrCodeEntries, { value: '', label: '' }]);
    }
  }

  public removeQrCode(index: number): void {
    this.qrCodeEntriesChange.emit(this.qrCodeEntries.filter((_, entryIndex) => entryIndex !== index));
  }

  public setQrCodeLink(index: number, value: string): void {
    this.updateQrCode(index, 'value', value);
  }

  public setQrCodeLabel(index: number, event: Event): void {
    const input = event.target as HTMLTextAreaElement;
    const lines = input.value.split('\n');
    const label = lines.length > 2 && (event as InputEvent).inputType === 'insertLineBreak'
      ? this.qrCodeEntries[index].label
      : lines.slice(0, 2).join('\n');

    if (input.value !== label) {
      input.value = label;
    }
    this.updateQrCode(index, 'label', label);
  }

  private updateQrCode(index: number, field: keyof QrCodeEntry, value: string): void {
    if (this.qrCodeEntries[index][field] === value) {
      return;
    }

    this.qrCodeEntriesChange.emit(this.qrCodeEntries.map((entry, entryIndex) =>
      entryIndex === index ? { ...entry, [field]: value } : entry,
    ));
  }

  public setCity(value: string): void {
    this.city = value;
    this.cityChange.emit(value);
  }

  public setDate(value: string): void {
    this.date = value;
    this.dateChange.emit(value);
  }

  public setRecipientName(value: string): void {
    this.recipientName = value;
    this.recipientNameChange.emit(value);
  }

  public setCertificateText(value: string): void {
    this.certificateText = value;
    this.certificateTextChange.emit(value);
  }

  public setEventType(value: string): void {
    this.eventType = value;
    this.eventTypeChange.emit(value);
  }

  public setEventShortDescription(value: string): void {
    this.eventShortDescription = value;
    this.eventShortDescriptionChange.emit(value);
  }

  public setEventDescription(value: string): void {
    this.eventDescription = value;
    this.eventDescriptionChange.emit(value);
  }

  public setEventPlace(value: string): void {
    this.eventPlace = value;
    this.eventPlaceChange.emit(value);
  }

  public setEventDate(value: string): void {
    this.eventDate = value;
    this.eventDateChange.emit(value);
  }

  public setEventTime(value: string): void {
    this.eventTime = value;
    this.eventTimeChange.emit(value);
  }

  public setEventAgeLimit(value: string): void {
    this.eventAgeLimit = value;
    this.eventAgeLimitChange.emit(value);
  }

  public setEventAdditionalInfo(value: string): void {
    this.eventAdditionalInfo = value;
    this.eventAdditionalInfoChange.emit(value);
  }

  public setEventEndDate(value: string): void {
    console.log('DataTabs получил дату окончания:', value)
    this.eventEndDate = value;
    this.eventEndDateChange.emit(value);
  }
}
