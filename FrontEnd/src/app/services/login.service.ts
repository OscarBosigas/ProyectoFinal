import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Docente } from '../model/docente';
import { Observable } from 'rxjs';
import { Estudiante } from '../model/estudiante';
import { Materia } from '../model/materia';
import { Estructura } from '../model/estructura';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient) {}

  usuario: string;
  materia: number;
  desc: string;

  getMateria(mat: number) {
    this.materia = mat;
  }

  getMateria2() {
    return this.materia;
  }

  getDesc(desc: string) {
    this.desc = desc;
  }

  getDesc2() {
    return this.desc;
  }

  getUsuario(user: string) {
    this.usuario = user;
  }

  getUsuario2() {
    return this.usuario;
  }

  getJson(url: string) {
    return this.http.get(url);
  }

  getDocentes(url: string): Observable<Docente[]> {
    return this.http.get<Docente[]>(url);
  }

  getADocente(url: string): Observable<Docente> {
    return this.http.get<Docente>(url);
  }

  getEstudiantes(url: string): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(url);
  }

  addEstudiante(url: string, estudiante: Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(url, estudiante);
  }

  editEstudiate(url: string, estudiante: Estudiante) {
    return this.http.post<Estudiante>(url, estudiante);
  }

  deleteEstudiante(url: string) {
    return this.http.delete<Estudiante>(url);
  }

  addDocente(url: string, docente: Docente): Observable<Docente> {
    return this.http.post<Docente>(url, docente);
  }

  editDocente(url: string, docente: Docente) {
    return this.http.post<Docente>(url, docente);
  }

  deleteDocente(url: string) {
    return this.http.delete<Docente>(url);
  }

  getMateriasDocente(url: string): Observable<Materia[]> {
    return this.http.get<Materia[]>(url);
  }

  getMateriaById(url: string): Observable<Materia> {
    return this.http.get<Materia>(url);
  }

  getEstructura(url: string): Observable<Estructura[]> {
    return this.http.get<Estructura[]>(url);
  }

  addEstructura(url: string, estructura: Estructura): Observable<Estructura> {
    return this.http.post<Estructura>(url, estructura);
  }

  editEstructura(url: string, estructura: Estructura) {
    return this.http.post<Estructura>(url, estructura);
  }

  deleteEstructura(url: string) {
    return this.http.delete<Estructura>(url);
  }


}
