import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface LayoutItem {
  guid: string;
  zipFileName: string;
  jsonFileName: string;
  jsonExists: boolean;
  fileSizeBytes: number;
  createdAtUtc: string;
}

export interface LayoutMetadata {
  templateId: number;
  formData: any;
  activeLogos: string[];
  photo: string;
}

@Injectable({
  providedIn: 'root'
})


export class GeneratedService {
  
  private http = inject(HttpClient);
  
  saveUserLayout(formData: FormData) {
    return this.http.post(
      '/api/GeneratedLayout/saveUserLayout',
      formData
    );
  }

  getMyLayouts() {
    return this.http.get<LayoutItem[]>(
      '/api/GeneratedLayout/userLayouts/mine'
    );
  }

  getLayoutMetadata(guid: string) {
    return this.http.get(
      `/api/GeneratedLayout/userLayout/${guid}/metadata`
    );
  }

  getLayoutJson(guid: string) {
    return this.http.get<any>(
      `/api/GeneratedLayout/userLayout/${guid}`
    );
  }
}