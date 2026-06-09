import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class LogoService {
  private http = inject(HttpClient);

  private baseUrl = environment.baseUrl;

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  add(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, formData);
  }

  update(id: number, formData: FormData): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, formData);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}