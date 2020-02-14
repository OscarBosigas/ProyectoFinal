import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Docente } from '../../model/docente';
import { Estudiante } from '../../model/estudiante';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private login: LoginService) { }

  docentes: Docente[];
  estudiantes: Estudiante[];

  ngOnInit() {
    this.login.getDocentes('http://localhost:3000/docente').subscribe(data => this.docentes = data);
    this.login.getEstudiantes('http://localhost:3000/estudiante').subscribe(data => this.estudiantes = data);
  }

  onAgregarDocente() {
    this.router.navigate(['agregarDocente']);
  }

  onEditarDocente() {
    this.router.navigate(['editarDocente']);
  }

  onEliminarDocente() {
    this.router.navigate(['eliminarDocente']);
  }

  onAgregarEstudiante() {
    this.router.navigate(['agregarEstudiante']);
  }

  onEditarEstudiante() {
    this.router.navigate(['editarEstudiante']);
  }

  onEliminarEstudiante() {
    this.router.navigate(['eliminarEstudiante']);
  }

  onCerrar() {
    this.router.navigate(['']);
  }

}
