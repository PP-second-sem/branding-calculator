import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMaterial } from '../../models/material.model';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private http = inject(HttpClient);
  private baseUrl = environment.baseUrl;

  getMaterials(): Observable<IMaterial[]> {
    return this.http.get<IMaterial[]>(`${this.baseUrl}/Material`);
  }

  getMaterialImageUrl(id: number): string {
    return `${this.baseUrl}/Material/${id}/download`;
  }

  deleteMaterial(id: number) {
    return this.http.delete(`${this.baseUrl}/Material/${id}`);
  }
}