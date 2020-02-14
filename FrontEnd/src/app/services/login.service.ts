import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Docente } from '../model/docente';
import { Observable } from 'rxjs';
import { Estudiante } from '../model/estudiante';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient) {}

  getJson(url: string) {
    return this.http.get(url);
  }

  getDocentes(url: string): Observable<Docente[]> {
    return this.http.get<Docente[]>(url);
  }

  getEstudiantes(url: string): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(url);
  }
}
