import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Placeholder } from '../placeholder/placeholder';
import { FormsModule } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { TemplateData } from '../../models/layout.model';

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
  public qrCode1 = '';
  public qrCode1Label = '';
  public qrCode2 = '';
  public qrCode2Label = '';
  public address = '';
  public qrCodesGenerated = false;
  public qrCode1Enabled = true;
  public qrCode2Enabled = false;
  public city = '';
  public date = '';

  @Output() cityChange = new EventEmitter<string>();
  @Output() dateChange = new EventEmitter<string>();
  @ViewChild(Placeholder) fullNameInput!: Placeholder;
  @Input() layoutName = '';
  @Output() fullNameChange = new EventEmitter<string>();
  @Output() positionChange = new EventEmitter<string>();
  @Output() phoneChange = new EventEmitter<string>();
  @Output() mobilePhoneChange = new EventEmitter<string>();
  @Output() emailChange = new EventEmitter<string>();
  @Output() addressChange = new EventEmitter<string>();
  @Output() qrCode1Change = new EventEmitter<string>();
  @Output() qrCode1LabelChange = new EventEmitter<string>();
  @Output() qrCode2Change = new EventEmitter<string>();
  @Output() qrCode2LabelChange = new EventEmitter<string>();
  @Output() qrCodesGeneratedChange = new EventEmitter<boolean>();
  @Output() qrCode1EnabledChange = new EventEmitter<boolean>();
  @Output() qrCode2EnabledChange = new EventEmitter<boolean>();

  public syncData(data: TemplateData): void {
    this.fullName = data.fullName;
    this.position = data.position;
    this.phone = data.phone ?? '';
    this.mobilePhone = data.mobilePhone ?? '';
    this.email = data.email ?? '';
    this.address = data.address ?? '';
    this.qrCode1 = data.qrCode1 ?? '';
    this.qrCode1Label = data.qrCode1Label ?? '';
    this.qrCode2 = data.qrCode2 ?? '';
    this.qrCode2Label = data.qrCode2Label ?? '';
    this.qrCodesGenerated = data.qrCodesGenerated ?? false;
    this.qrCode2Enabled = data.qrCode2Enabled ?? false;

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

  public setQrCode1(value: string): void {
    this.qrCode1 = value;
    this.qrCode1Change.emit(value);
  }

  public setQrCode2(value: string): void {
    this.qrCode2 = value;
    this.qrCode2Change.emit(value);
  }

  public setQrCode1Label(value: string): void {
    this.qrCode1Label = value;
    this.qrCode1LabelChange.emit(value);
  }

  public setQrCode2Label(value: string): void {
    this.qrCode2Label = value;
    this.qrCode2LabelChange.emit(value);
  }

  public generateQrCodes(): void {
    this.qrCodesGenerated = true;
    this.qrCodesGeneratedChange.emit(true);
  }

  public setQrCode1Enabled(value: boolean): void {
    this.qrCode1Enabled = value;
    this.qrCode1EnabledChange.emit(value);
  }

  public setQrCode2Enabled(value: boolean): void {
    this.qrCode2Enabled = value;
    this.qrCode2EnabledChange.emit(value);
  }

  public setCity(value: string): void {
    this.city = value;
    this.cityChange.emit(value);
  }

  public setDate(value: string): void {
    this.date = value;
    this.dateChange.emit(value);
  }
}
