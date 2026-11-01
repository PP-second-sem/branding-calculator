import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { layouts } from './data/templates';
import { Layout, Template, TemplateData } from '../../models/layout.model';
import { TemplateList } from '../../components/template-list/template-list';
import { DataTabs } from '../../components/data-tabs/data-tabs';
import { LayoutPreview } from '../../components/layout-preview/layout-preview';
import { ConstructorState } from '../../models/constructor-state.model';
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
  public qrCode1 = '';
  public qrCode1Label = '';
  public qrCode2 = '';
  public qrCode2Label = '';
  public qrCodesGenerated = false;
  public qrCode1Enabled = true;
  public qrCode2Enabled = false;
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
      qrCode1: '',
      qrCode1Label: '',
      qrCode2: '',
      qrCode2Label: '',
      qrCodesGenerated: false,
      qrCode2Enabled: false,
      eventType: '',
      eventShortDescription: '',
      eventDescription: '',
      eventPlace: '',
      eventDate: '',
      eventTime: '',
      eventAgeLimit: '',
      eventAdditionalInfo: '',
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
    this.qrCode1 = data.qrCode1 ?? '';
    this.qrCode1Label = data.qrCode1Label ?? '';
    this.qrCode2 = data.qrCode2 ?? '';
    this.qrCode2Label = data.qrCode2Label ?? '';
    this.qrCodesGenerated = data.qrCodesGenerated ?? false;
    this.qrCode2Enabled = data.qrCode2Enabled ?? false;
    this.eventType = data.eventType ?? '';
    this.eventShortDescription = data.eventShortDescription ?? '';
    this.eventDescription = data.eventDescription ?? '';
    this.eventPlace = data.eventPlace ?? '';
    this.eventDate = data.eventDate ?? '';
    this.eventTime = data.eventTime ?? '';
    this.eventAgeLimit = data.eventAgeLimit ?? '';
    this.eventAdditionalInfo = data.eventAdditionalInfo ?? '';

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
      qrCode1: this.qrCode1,
      qrCode1Label: this.qrCode1Label,
      qrCode2: this.qrCode2,
      qrCode2Label: this.qrCode2Label,
      qrCodesGenerated: this.qrCodesGenerated,
      qrCode2Enabled: this.qrCode2Enabled,
      eventType: this.eventType,
      eventShortDescription: this.eventShortDescription,
      eventDescription: this.eventDescription,
      eventPlace: this.eventPlace,
      eventDate: this.eventDate,
      eventTime: this.eventTime,
      eventAgeLimit: this.eventAgeLimit,
      eventAdditionalInfo: this.eventAdditionalInfo,
    };

    this.selectedTemplate = template;
    if (
      !template.data ||
      !Object.values(template.data).some(
        value => typeof value === 'string' && value.trim() !== ''
      )
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
      qrCode1: this.qrCode1,
      qrCode1Label: this.qrCode1Label,
      qrCode2: this.qrCode2,
      qrCode2Label: this.qrCode2Label,
      qrCodesGenerated: this.qrCodesGenerated,
      qrCode2Enabled: this.qrCode2Enabled,
      eventType: this.eventType,
      eventShortDescription: this.eventShortDescription,
      eventDescription: this.eventDescription,
      eventPlace: this.eventPlace,
      eventDate: this.eventDate,
      eventTime: this.eventTime,
      eventAgeLimit: this.eventAgeLimit,
      eventAdditionalInfo: this.eventAdditionalInfo,
    };
  }

  public setQrCode1(value: string): void {
    this.qrCode1 = value;
    this.updateSelectedTemplateData();
  }

  public setQrCode2(value: string): void {
    this.qrCode2 = value;
    this.updateSelectedTemplateData();
  }

  public setQrCode1Label(value: string): void {
    this.qrCode1Label = value;
    this.updateSelectedTemplateData();
  }

  public setQrCode2Label(value: string): void {
    this.qrCode2Label = value;
    this.updateSelectedTemplateData();
  } 

  public getCurrentState(): ConstructorState {
    return {
      fullName: this.fullName,
      position: this.position,
      phone: this.phone,
      mobilePhone: this.mobilePhone,
      email: this.email,
      address: this.address,
      qrCode1: this.qrCode1,
      qrCode1Label: this.qrCode1Label,
      qrCode2: this.qrCode2,
      qrCode2Label: this.qrCode2Label,
      qrCodesGenerated: this.qrCodesGenerated,
      qrCode2Enabled: this.qrCode2Enabled,
      eventType: this.eventType,
      eventShortDescription: this.eventShortDescription,
      eventDescription: this.eventDescription,
      eventPlace: this.eventPlace,
      eventDate: this.eventDate,
      eventTime: this.eventTime,
      eventAgeLimit: this.eventAgeLimit,
      eventAdditionalInfo: this.eventAdditionalInfo,
    };
  }

  public restoreState(state: ConstructorState): void {
    this.fullName = state.fullName;
    this.position = state.position;
    this.phone = state.phone;
    this.mobilePhone = state.mobilePhone;
    this.email = state.email;
    this.address = state.address;
    this.qrCode1 = state.qrCode1;
    this.qrCode1Label = state.qrCode1Label;
    this.qrCode2 = state.qrCode2;
    this.qrCode2Label = state.qrCode2Label;
    this.qrCodesGenerated = state.qrCodesGenerated;
    this.qrCode2Enabled = state.qrCode2Enabled;
    this.eventType = state.eventType;
    this.eventShortDescription = state.eventShortDescription;
    this.eventDescription = state.eventDescription;
    this.eventPlace = state.eventPlace;
    this.eventDate = state.eventDate;
    this.eventTime = state.eventTime;
    this.eventAgeLimit = state.eventAgeLimit;
    this.eventAdditionalInfo = state.eventAdditionalInfo;

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
      qrCode1: this.qrCode1,
      qrCode1Label: this.qrCode1Label,
      qrCode2: this.qrCode2,
      qrCode2Label: this.qrCode2Label,
      qrCodesGenerated: this.qrCodesGenerated,
      qrCode2Enabled: this.qrCode2Enabled,
      eventType: this.eventType,
      eventShortDescription: this.eventShortDescription,
      eventDescription: this.eventDescription,
      eventPlace: this.eventPlace,
      eventDate: this.eventDate,
      eventTime: this.eventTime,
      eventAgeLimit: this.eventAgeLimit,
      eventAdditionalInfo: this.eventAdditionalInfo,
    });
  }

  public async downloadLayout(): Promise<void> {
    const element = this.layoutPreview.preview.nativeElement;

    const canvas = await html2canvas(element, {
      backgroundColor: null,
      scale: 2,
    });

    const link = document.createElement('a');

    link.download = 'layout.png';
    link.href = canvas.toDataURL('image/png');

    link.click();
  }

  
}