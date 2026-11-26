import { CommonModule } from '@angular/common';
import { Component, signal, ViewChild } from '@angular/core';
import { layouts } from './data/templates';
import type { CertificateWording, Layout, Template, TemplateData } from '../../models/layout.model';
import { TemplateList } from '../../components/template-list/template-list';
import { DataTabs } from '../../components/data-tabs/data-tabs';
import { LayoutPreview } from '../../components/layout-preview/layout-preview';
import { ConstructorState } from '../../models/constructor-state.model';
import { readQrCodeEntries, type QrCodeEntry } from '../../models/qr-code.model';
import html2canvas from 'html2canvas';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-constructor-page',
  imports: [CommonModule, TemplateList, DataTabs, LayoutPreview, RouterLink],
  templateUrl: './constructor-page.html',
  styleUrl: './constructor-page.scss',
})
export class ConstructorPage {
  @ViewChild(LayoutPreview)
  layoutPreview!: LayoutPreview;  
  @ViewChild(DataTabs) dataTabs!: DataTabs;
  public layouts: Layout[] = layouts;
  public fullName = '';
  public position = '';
  public phone = '';
  public mobilePhone = '';
  public recipientName = '';
  public certificateText = '';
  public email = '';
  public address = '';
  public city = '';
  public date = '';
  public qrCodeEntries: QrCodeEntry[] = [];
  public selectedLayout: Layout = this.layouts[0];
  public selectedTemplate: Template = this.selectedLayout.templates[0];
  public showPhone = true;
  public showAddress = true;
  public eventType = '';
  public eventShortDescription = '';
  public eventDescription = '';
  public eventPlace = '';
  public eventDate = '';
  public eventTime = '';
  public eventAgeLimit = '';
  public eventAdditionalInfo = '';
  public eventEndDate = '';
  public readonly isDownloading = signal(false);
  public readonly downloadError = signal('');
  private readonly certificateWordings = new WeakMap<Template, CertificateWording>();

  constructor() {
    this.ensureTemplateData(this.selectedTemplate);
    this.loadTemplateData(this.selectedTemplate);
  }

  private createTemplateData(): TemplateData {
    return {
      fullName: '',
      position: '',
      phone: '',
      mobilePhone: '',
      email: '',
      address: '',
      city: '',
      date: '',
      recipientName: '',
      certificateText: '',
      showPhone: true,
      showAddress: true,
      qrCodeEntries: [],
      eventType: '',
      eventShortDescription: '',
      eventDescription: '',
      eventPlace: '',
      eventDate: '',
      eventTime: '',
      eventAgeLimit: '',
      eventAdditionalInfo: '',
      eventEndDate: '',
    };
  }

  private ensureTemplateData(template: Template): void {
    if (!template.data) {
      template.data = this.createTemplateData();
    }
  }

  private loadTemplateData(template: Template): void {
    this.ensureTemplateData(template);

    const data = template.data!;

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
    this.showPhone = data.showPhone ?? true;
    this.showAddress = data.showAddress ?? true;
    this.qrCodeEntries = readQrCodeEntries(data);
    this.eventType = data.eventType ?? '';
    this.eventShortDescription = data.eventShortDescription ?? '';
    this.eventDescription = data.eventDescription ?? '';
    this.eventPlace = data.eventPlace ?? '';
    this.eventDate = data.eventDate ?? '';
    this.eventTime = data.eventTime ?? '';
    this.eventAgeLimit = data.eventAgeLimit ?? '';
    this.eventAdditionalInfo = data.eventAdditionalInfo ?? '';
    this.eventEndDate = data.eventEndDate ?? '';

    this.syncDataTabs();
  }

  public selectLayout(layout: Layout): void {
    this.updateSelectedTemplateData();

    this.selectedLayout = layout;
    this.selectedTemplate = layout.templates[0];

    this.ensureTemplateData(this.selectedTemplate);
    this.loadTemplateData(this.selectedTemplate);

    if (
      ['Бейджи', 'Сертификаты', 'Дипломы'].includes(layout.name) &&
      this.dataTabs
    ) {
      this.dataTabs.activeTab = 'personal';
    }
  }

  public get certificateWording(): CertificateWording | undefined {
    return this.certificateWordings.get(this.selectedTemplate)
      ?? this.selectedTemplate.certificateVariant?.defaultWording;
  }

  public get previewSource(): string {
    const { preview, certificateVariant } = this.selectedTemplate;
    return certificateVariant && this.certificateWording !== certificateVariant.defaultWording
      ? certificateVariant.alternatePreview
      : preview;
  }

  public selectCertificateWording(wording: CertificateWording): void {
    this.certificateWordings.set(this.selectedTemplate, wording);
  }

  public selectTemplate(template: Template): void {
    this.updateSelectedTemplateData();
    const currentData = {
      fullName: this.fullName,
      position: this.position,
      phone: this.phone,
      mobilePhone: this.mobilePhone,
      email: this.email,
      address: this.address,
      city: this.city,
      date: this.date,
      recipientName: this.recipientName,
      certificateText: this.certificateText,
      showPhone: this.showPhone,
      showAddress: this.showAddress,
      qrCodeEntries: this.qrCodeEntries,
      eventType: this.eventType,
      eventShortDescription: this.eventShortDescription,
      eventDescription: this.eventDescription,
      eventPlace: this.eventPlace,
      eventDate: this.eventDate,
      eventTime: this.eventTime,
      eventAgeLimit: this.eventAgeLimit,
      eventAdditionalInfo: this.eventAdditionalInfo,
      eventEndDate: this.eventEndDate,
    };

    this.selectedTemplate = template;
    const hasQrCodeEdits = [...(template.undoStack ?? []), ...(template.redoStack ?? [])]
      .some(state => readQrCodeEntries(state).length > 0);
    if (
      !template.data ||
      (!hasQrCodeEdits && !readQrCodeEntries(template.data).length && !Object.values(template.data).some(
        value => typeof value === 'string' && value.trim() !== ''
      ))
    ) {
      template.data = {
        ...this.createTemplateData(),
        ...currentData,
      };
    }

    this.loadTemplateData(template);
  }

  public updateSelectedTemplateData(): void {
    this.ensureTemplateData(this.selectedTemplate);

    this.selectedTemplate.data = {
      fullName: this.fullName,
      position: this.position,
      phone: this.phone,
      mobilePhone: this.mobilePhone,
      email: this.email,
      address: this.address,
      city: this.city,
      date: this.date,
      recipientName: this.recipientName,
      certificateText: this.certificateText, 
      showPhone: this.showPhone,
      showAddress: this.showAddress,
      qrCodeEntries: this.qrCodeEntries,
      eventType: this.eventType,
      eventShortDescription: this.eventShortDescription,
      eventDescription: this.eventDescription,
      eventPlace: this.eventPlace,
      eventDate: this.eventDate,
      eventTime: this.eventTime,
      eventAgeLimit: this.eventAgeLimit,
      eventAdditionalInfo: this.eventAdditionalInfo,
      eventEndDate: this.eventEndDate,
    };
  }

  public getCurrentState(): ConstructorState {
    return {
      fullName: this.fullName,
      position: this.position,
      phone: this.phone,
      mobilePhone: this.mobilePhone,
      email: this.email,
      address: this.address,
      qrCodeEntries: this.qrCodeEntries,
      eventType: this.eventType,
      eventShortDescription: this.eventShortDescription,
      eventDescription: this.eventDescription,
      eventPlace: this.eventPlace,
      eventDate: this.eventDate,
      eventTime: this.eventTime,
      eventAgeLimit: this.eventAgeLimit,
      eventAdditionalInfo: this.eventAdditionalInfo,
      eventEndDate: this.eventEndDate,
    };
  }

  public restoreState(state: ConstructorState): void {
    this.fullName = state.fullName;
    this.position = state.position;
    this.phone = state.phone;
    this.mobilePhone = state.mobilePhone;
    this.email = state.email;
    this.address = state.address;
    this.qrCodeEntries = readQrCodeEntries(state);
    this.eventType = state.eventType;
    this.eventShortDescription = state.eventShortDescription;
    this.eventDescription = state.eventDescription;
    this.eventPlace = state.eventPlace;
    this.eventDate = state.eventDate;
    this.eventTime = state.eventTime;
    this.eventAgeLimit = state.eventAgeLimit;
    this.eventAdditionalInfo = state.eventAdditionalInfo;
    this.eventEndDate = state.eventEndDate;

    this.updateSelectedTemplateData();
    this.syncDataTabs();
  }

  public saveState(): void {
    this.selectedTemplate.undoStack ??= [];
    this.selectedTemplate.redoStack ??= [];

    this.selectedTemplate.undoStack.push(this.getCurrentState());
    this.selectedTemplate.redoStack = [];
  }

  public undo(): void {
    const undoStack = this.selectedTemplate.undoStack ??= [];
    const redoStack = this.selectedTemplate.redoStack ??= [];

    if (undoStack.length === 0) {
      return;
    }

    const currentState = this.getCurrentState();
    const previousState = undoStack.pop();

    if (!previousState) {
      return;
    }

    redoStack.push(currentState);
    this.restoreState(previousState);
  }

  public redo(): void {
    const undoStack = this.selectedTemplate.undoStack ??= [];
    const redoStack = this.selectedTemplate.redoStack ??= [];

    if (redoStack.length === 0) {
      return;
    }

    const currentState = this.getCurrentState();
    const nextState = redoStack.pop();

    if (!nextState) {
      return;
    }

    undoStack.push(currentState);
    this.restoreState(nextState);
  }

  public syncDataTabs(): void {
    if (!this.dataTabs) {
      return;
    }

    this.dataTabs.syncData({
      fullName: this.fullName,
      position: this.position,
      phone: this.phone,
      mobilePhone: this.mobilePhone,
      email: this.email,
      address: this.address,
      city: this.city,
      date: this.date,
      recipientName: this.recipientName,
      certificateText: this.certificateText,
      qrCodeEntries: this.qrCodeEntries,
      eventType: this.eventType,
      eventShortDescription: this.eventShortDescription,
      eventDescription: this.eventDescription,
      eventPlace: this.eventPlace,
      eventDate: this.eventDate,
      eventTime: this.eventTime,
      eventAgeLimit: this.eventAgeLimit,
      eventAdditionalInfo: this.eventAdditionalInfo,
      eventEndDate: this.eventEndDate,
    });
  }

  public async downloadLayout(format: 'png' | 'pdf' = 'png'): Promise<void> {
    if (this.isDownloading()) {
      return;
    }

    this.isDownloading.set(true);
    this.downloadError.set('');
    try {
      const element = this.layoutPreview.preview.nativeElement;
      if (format === 'pdf') {
        await this.downloadPdf(element);
      } else {
        const canvas = await html2canvas(element, { backgroundColor: null, scale: 2 });
        const link = document.createElement('a');
        link.download = 'layout.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      }
    } catch {
      this.downloadError.set('Не удалось скачать макет в формате ' + format.toUpperCase() + '. Попробуйте ещё раз.');
    } finally {
      this.isDownloading.set(false);
    }
  }

  private async downloadPdf(element: HTMLElement): Promise<void> {
    const { width, height } = element.getBoundingClientRect();
    const orientation = width > height ? 'landscape' : 'portrait';
    const [pageWidth, pageHeight] = orientation === 'landscape' ? [297, 210] : [210, 297];
    const millimetersPerPixel = Math.min(pageWidth / width, pageHeight / height);
    const printDpi = 300;
    const millimetersPerInch = 25.4;
    const [canvas, { jsPDF }] = await Promise.all([
      html2canvas(element, {
        backgroundColor: '#ffffff',
        scale: millimetersPerPixel * printDpi / millimetersPerInch,
      }),
      import('jspdf'),
    ]);

    const pdf = new jsPDF({ orientation, unit: 'mm', format: 'a4', compress: true });
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const scale = Math.min(pdfWidth / canvas.width, pdfHeight / canvas.height);
    const imageWidth = canvas.width * scale;
    const imageHeight = canvas.height * scale;
    pdf.addImage(
      canvas, 'PNG', (pdfWidth - imageWidth) / 2, (pdfHeight - imageHeight) / 2,
      imageWidth, imageHeight, undefined, 'FAST',
    );
    pdf.save('layout.pdf');
  }

  public setEventEndDate(value: string): void {
    this.eventEndDate = value;
    this.updateSelectedTemplateData();
  }
}