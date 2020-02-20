import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Docente } from '../model/docente';
import { Observable } from 'rxjs';
import { Estudiante } from '../model/estudiante';
import { Materia } from '../model/materia';
import { Estructura } from '../model/estructura';
import { Nota } from '../model/nota';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient) {}

  usuario: string;
  materia: number;
  desc: string;
  cod: string;
  doc1: string;
  curso = 0;
  codAlumno = 0;
  nota = 0;

  getNotaG(nota: number) {
    this.nota = nota;
  }

  getNotaG2() {
    return this.nota;
  }

  getAlumnoCod(cod: number) {
    this.codAlumno = cod;
  }

  getAlumnoCod2() {
    return this.codAlumno;
  }

  getCurso(curso: number) {
    this.curso = curso;
  }

  getCurso2() {
    return this.curso;
  }

  getEstudianteDoc(doc: string) {
    this.doc1 = doc;
  }

  getEstudianteDoc2() {
    return this.doc1;
  }

  getEstudiante(cod: string) {
    this.cod = cod;
  }

  getEstudiante2() {
    return this.cod;
  }

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

  getAEstudiante(url: string): Observable<Estudiante> {
    return this.http.get<Estudiante>(url);
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

  getMateriasCurso(url: string): Observable<Materia[]> {
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

  getEstudiantesPorMateria(url: string): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(url);
  }

  getEstudianteByCod(url: string): Observable<Estudiante> {
    return this.http.get<Estudiante>(url);
  }

  calificar(url: string, nota: Nota): Observable<Nota> {
    return this.http.post<Nota>(url, nota);
  }

  getNota(url: string): Observable<Nota> {
    return this.http.get<Nota>(url);
  }

  editCalificacion(url: string, nota: Nota) {
    return this.http.post(url, nota);
  }

  getCalificacionesCurso(url: string): Observable<Nota[]> {
    return this.http.get<Nota[]>(url);
  }

  getAMateria(url: string): Observable<Materia> {
    return this.http.get<Materia>(url);
  }

  getNotasMateria(url: string): Observable<Nota[]> {
    return this.http.get<Nota[]>(url);
  }

  cambiarContrasenaDocente(url: string, docente: Docente): Observable<Docente> {
    return this.http.post<Docente>(url, docente);
  }

  cambiarContrasenaEstudiante(url: string, estudiante: Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(url, estudiante);
  }

  addMateria(url: string, materia: Materia): Observable<Materia> {
    return this.http.post<Materia>(url, materia);
  }

  deleteMateria(url: string)  {
    return this.http.delete(url);
  }

  getMaterias(url: string): Observable<Materia[]> {
    return this.http.get<Materia[]>(url);
  }
}
