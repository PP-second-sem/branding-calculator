import { ConstructorState } from "./constructor-state.model";

export interface Template {
  id: number;
  preview: string;
  filledPreview: string;
  textFields: TextField[];
  qrCodes?: {
    x: number;
    y: number;
    size: number;
    labelFontSize: number;
  }[];
  addressContinuationOffset?: number;
  fullNameContinuationOffset?: number;
  splitPatronymic?: boolean;
  data?: TemplateData;
  undoStack?: ConstructorState[];
  redoStack?: ConstructorState[];
  icons?: {
    phone?: {
      src?: string;
      x?: number;
      y?: number;
      width?: number;
      height?: number;
      label?: {
        x: number;
        y: number;
        fontSize: number;
        fontWeight: number;
        color: string;
      };
    };
    address?: {
      src?: string;
      x?: number;
      y?: number;
      width?: number;
      height?: number;
    };
  };
}

export interface Layout {
  name: string;
  icon: string;
  templates: Template[];
}

export interface TextField {
  id: string;
  type:
  | 'fullName'
  | 'position'
  | 'phone'
  | 'mobilePhone'
  | 'email'
  | 'address'
  | 'date'
  | 'city'
  | 'recipientName'
  | 'certificateText'
  | 'eventTypeField'
  | 'eventShortDescriptionField'
  | 'eventDescriptionField'
  | 'eventPlaceField'
  | 'eventDateField'
  | 'eventTimeField'
  | 'eventAgeLimitField'
  | 'eventAdditionalInfoField';
  x: number;
  y: number;
  width: number;
  fontSize: number;
  fontWeight: number;
  color?: string;
}

export interface TemplateData {
  fullName: string;
  position: string;
  phone?: string;
  mobilePhone?: string;
  email?: string;
  address?: string;
  recipientName?: string;
  certificateText?: string;
  qrCode1?: string;
  qrCode1Label?: string;
  qrCode2?: string;
  qrCode2Label?: string;
  qrCodesGenerated?: boolean;
  qrCode2Enabled?: boolean;
  date?: string;
  city?: string;
  showAddress?: boolean;
  showPhone?: boolean;
  eventType?: string;
  eventShortDescription?: string;
  eventDescription?: string;
  eventPlace?: string;
  eventDate?: string;
  eventTime?: string;
  eventAgeLimit?: string;
  eventAdditionalInfo?: string;
}