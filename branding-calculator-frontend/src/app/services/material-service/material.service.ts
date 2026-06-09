import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private http = inject(HttpClient);
  private baseUrl = environment.baseUrl;

  getAll() {
    return this.http.get(`${this.baseUrl}/Material`);
  }

  getById(id: number) {
    return this.http.get(`${this.baseUrl}/Material/${id}`);
  }

  create(formData: FormData) {
    return this.http.post(`${this.baseUrl}/Material`, formData);
  }

  update(id: number, formData: FormData) {
    return this.http.put(`${this.baseUrl}/Material/${id}`, formData);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/Material/${id}`);
  }

  getMyLayouts() {
    return this.http.get(`${this.baseUrl}/GeneratedLayout/userLayouts/mine`);
  }

  getUserLayout(guid: string) {
    return this.http.get(`${this.baseUrl}/GeneratedLayout/userLayout/${guid}`);
  }
}