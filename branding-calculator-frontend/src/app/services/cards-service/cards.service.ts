import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMaterial } from '../../models/material.model';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private http = inject(HttpClient);

  getMaterials(): Observable<IMaterial[]> {
    return this.http.get<IMaterial[]>('/api/Material');
  }

  getMaterialImageUrl(id: number): string {
    return `/api/Material/${id}/download`;
  }

  deleteMaterial(id: number) {
    return this.http.delete(`/api/Material/${id}`);
  }
}