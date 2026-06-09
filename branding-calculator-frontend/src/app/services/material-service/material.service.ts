import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private http = inject(HttpClient);

  getAll() {
    return this.http.get('/api/Material');
  }

  getById(id: number) {
    return this.http.get(`/api/Material/${id}`);
  }

  create(formData: FormData) {
    return this.http.post('/api/Material', formData);
  }

  update(id: number, formData: FormData) {
    return this.http.put(`/api/Material/${id}`, formData);
  }

  delete(id: number) {
    return this.http.delete(`/api/Material/${id}`);
  }

  getMyLayouts() {
    return this.http.get('/api/GeneratedLayout/userLayouts/mine');
  }

  getUserLayout(guid: string) {
    return this.http.get(`/api/GeneratedLayout/userLayout/${guid}`);
  }
}