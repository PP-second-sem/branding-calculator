import { ConstructorState } from "./constructor-state.model";

export interface Template {
    id: number;
    preview: string;
    textFields: TextField[];
    qrCodes: {
      x: number;
      y: number;
      size: number;
      labelFontSize: number;
    }[];
    addressContinuationOffset?: number;
    fullNameContinuationOffset?: number;
    data?: TemplateData;
    undoStack?: ConstructorState[];
    redoStack?: ConstructorState[];
}

export interface Layout {
  name: string;
  icon: string;
  templates: Template[];
}

export interface TextField {
  id: string;
  type: 'fullName' | 'position' | 'phone' | 'mobilePhone' | 'email' | 'address';
  x: number;
  y: number;
  width: number;
  fontSize: number;
  fontWeight: number;
}

export interface TemplateData {
    fullName: string;
    position: string;
    phone: string;
    mobilePhone: string;
    email: string;
    address: string;
    qrCode1: string;
    qrCode1Label: string;
    qrCode2: string;
    qrCode2Label: string;
    qrCodesGenerated: boolean;
    qrCode2Enabled: boolean;
}