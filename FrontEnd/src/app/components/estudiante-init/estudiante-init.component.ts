import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Materia } from '../../model/materia';
import { Estudiante } from '../../model/estudiante';
import { Nota } from '../../model/nota';

@Component({
  selector: 'app-estudiante-init',
  templateUrl: './estudiante-init.component.html',
  styleUrls: ['./estudiante-init.component.css']
})
export class EstudianteInitComponent implements OnInit {

  constructor(private login: LoginService, private router: Router) { }

  estudiante: Estudiante = new Estudiante();
  materia: Materia = new Materia();

  materias: Materia[];
  notas: Nota[];

  Nombre = '';
  nombreMateria: string;
  Promedio: number = 0;

  ngOnInit() {
      this.login.getAEstudiante('http://localhost:3000/estudiante/' + this.login.getUsuario2()).subscribe((res: any) => {
      this.estudiante.doc = res[0].DOC;
      this.estudiante.nombre = res[0].NOMBRE;
      this.estudiante.apellido = res[0].APELLIDO;
      this.login.getMateriasCurso('http://localhost:3000/materia/' + res[0].COD_CURSO).subscribe(
        data =>  this.materias = data);
      this.Nombre = this.estudiante.nombre + ' ' + this.estudiante.apellido;
      this.login.getCalificacionesCurso('http://localhost:3000/nota/estudiante/' + res[0].DOC).subscribe(
        data => {
          this.notas = data; 
          for (let index = 0; index < this.notas.length; index++) {
            this.Promedio += this.notas[index].valor;
          }
          this.Promedio = this.Promedio / this.notas.length;
        });
    });
  }

  onCerrar() {
    this.router.navigate(['']);
  }

  onCalificacion(cod: number) {
    this.login.getMateria(cod);
    this.router.navigate(['estadistica']);
  }
}
