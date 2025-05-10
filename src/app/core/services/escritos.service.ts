// src/app/core/services/escritos.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Escrito } from '../../escritos.model';

@Injectable({
  providedIn: 'root',
})
export class EscritosService {
  

  private apiUrl = 'http://localhost:3000/escritos'; // ← cambiar luego por la URL real del backend

  constructor(private http: HttpClient) {}


  // Obtener escritos
  getEscritos(): Observable<Escrito[]> {
    return this.http.get<Escrito[]>(this.apiUrl);
  }


  // Guardar los escritos
  agregarEscrito(escrito: Escrito): Observable<Escrito> {
    return this.http.post<Escrito>(this.apiUrl, escrito);
  }

  // Eliminar escritos
  eliminarEscrito(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
