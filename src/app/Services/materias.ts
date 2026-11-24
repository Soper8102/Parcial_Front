import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Materia } from '../Models/materia';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {
  private http = inject(HttpClient);
  private readonly apiUrl = `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.materias}`;
  private readonly fallbackUrl = `${API_CONFIG.fallbackUrl}${API_CONFIG.endpoints.materias}`;

  getMaterias(): Observable<Materia[]> {
    return this.http.get<Materia[]>(this.apiUrl).pipe(
      catchError(() => this.http.get<Materia[]>(this.fallbackUrl))
    );
  }
}
