export interface QrCodeEntry {
  value: string;
  label: string;
}

export interface StoredQrCodes {
  qrCodeEntries?: QrCodeEntry[];
  qrCode1?: string;
  qrCode1Label?: string;
  qrCode2?: string;
  qrCode2Label?: string;
  qrCode2Enabled?: boolean;
}

export function readQrCodeEntries(data: StoredQrCodes): QrCodeEntry[] {
  if (data.qrCodeEntries) {
    return data.qrCodeEntries;
  }

  const entries: QrCodeEntry[] = [];
  if (data.qrCode1 || data.qrCode1Label) {
    entries.push({value: data.qrCode1 ?? '', label: data.qrCode1Label ?? ''});
  }
  if (data.qrCode2Enabled !== false && (data.qrCode2 || data.qrCode2Label)) {
    entries.push({value: data.qrCode2 ?? '', label: data.qrCode2Label ?? ''});
  }
  return entries;
}
