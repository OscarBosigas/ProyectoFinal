import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
