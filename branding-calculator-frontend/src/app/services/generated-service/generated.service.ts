import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment';

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
  private baseUrl = environment.baseUrl;
  private http = inject(HttpClient);
  
  saveUserLayout(formData: FormData) {
    return this.http.post(
      `${this.baseUrl}/GeneratedLayout/saveUserLayout`,
      formData
    );
  }

  getMyLayouts() {
    return this.http.get<LayoutItem[]>(
      `${this.baseUrl}/GeneratedLayout/userLayouts/mine`
    );
  }

  getLayoutMetadata(guid: string) {
    return this.http.get(
      `${this.baseUrl}/GeneratedLayout/userLayout/${guid}/metadata`
    );
  }

  getLayoutJson(guid: string) {
    return this.http.get<any>(
      `${this.baseUrl}/GeneratedLayout/userLayout/${guid}`
    );
  }
}