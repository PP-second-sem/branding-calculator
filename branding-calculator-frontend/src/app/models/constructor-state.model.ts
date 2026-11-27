import type { StoredQrCodes } from './qr-code.model';

export interface ConstructorState extends StoredQrCodes {
    fullName: string;
    position: string;
    phone: string;
    mobilePhone: string;
    email: string;
    address: string;
    eventType: string;
    eventShortDescription: string;
    eventDescription: string;
    eventPlace: string;
    eventDate: string;
    eventTime: string;
    eventAgeLimit: string;
    eventEndDate: string;
    eventAdditionalInfo: string;
}
