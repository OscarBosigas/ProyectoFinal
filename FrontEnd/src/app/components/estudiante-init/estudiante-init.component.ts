import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Materia } from '../../model/materia';
import { Estudiante } from '../../model/estudiante';

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

  Nombre = '';
  nombreMateria: string;

  ngOnInit() {
      this.login.getADocente('http://localhost:3000/estudiante/' + this.login.getUsuario2()).subscribe((res: any) => {
      this.estudiante.doc = res[0].DOC;
      this.estudiante.nombre = res[0].NOMBRE;
      this.estudiante.apellido = res[0].APELLIDO;
      this.login.getMateriasCurso('http://localhost:3000/materia/' + res[0].DOC + '/' + res[0].COD_CURSO).subscribe(
          data => this.materias = data);
      this.Nombre = this.estudiante.nombre + ' ' + this.estudiante.apellido;
    });
  }

  onCerrar() {
    this.router.navigate(['']);
  }

}
