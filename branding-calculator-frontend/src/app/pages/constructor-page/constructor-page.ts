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
      qrCode1: '',
      qrCode1Label: '',
      qrCode2: '',
      qrCode2Label: '',
      qrCodesGenerated: false,
      qrCode2Enabled: false,
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
    this.qrCode1 = data.qrCode1 ?? '';
    this.qrCode1Label = data.qrCode1Label ?? '';
    this.qrCode2 = data.qrCode2 ?? '';
    this.qrCode2Label = data.qrCode2Label ?? '';
    this.qrCodesGenerated = data.qrCodesGenerated ?? false;
    this.qrCode2Enabled = data.qrCode2Enabled ?? false;

    this.syncDataTabs();
  }

  public selectLayout(layout: Layout): void {
    this.selectedLayout = layout;
    this.selectTemplate(layout.templates[0]);
  }

  public selectTemplate(template: Template): void {
    this.selectedTemplate = template;

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
      qrCode1: this.qrCode1,
      qrCode1Label: this.qrCode1Label,
      qrCode2: this.qrCode2,
      qrCode2Label: this.qrCode2Label,
      qrCodesGenerated: this.qrCodesGenerated,
      qrCode2Enabled: this.qrCode2Enabled,
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
      qrCode1: this.qrCode1,
      qrCode1Label: this.qrCode1Label,
      qrCode2: this.qrCode2,
      qrCode2Label: this.qrCode2Label,
      qrCodesGenerated: this.qrCodesGenerated,
      qrCode2Enabled: this.qrCode2Enabled,
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