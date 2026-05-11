import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMaterial } from '../models/material.model';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private http = inject(HttpClient);

  private baseUrl = 'http://91.201.54.116';

  getMaterials(): Observable<IMaterial[]> {
    return this.http.get<IMaterial[]>(
      `${this.baseUrl}/api/Material`
    );
  }

  getMaterialImageUrl(id: number): string {
    return `http://91.201.54.116/api/material/${id}/download`;
  } 
}