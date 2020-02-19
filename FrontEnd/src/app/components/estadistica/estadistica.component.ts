import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Materia } from '../../model/materia';
import { Estudiante } from '../../model/estudiante';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {

  constructor(private login: LoginService, private router: Router) { }

  materia: Materia = new Materia();
  estudiante: Estudiante = new Estudiante();
  NomMateria: string;
  Nota = 0;

  ngOnInit() {
    this.login.getAEstudiante('http://localhost:3000/estudiante/' + this.login.getUsuario2()).subscribe((res: any) => {
      this.estudiante.doc = res[0].DOC;
      this.estudiante.nombre = res[0].NOMBRE;
      this.estudiante.apellido = res[0].APELLIDO;
      this.login.getAlumnoCod(res[0].CODIGO);
      this.login.getNota('http://localhost:3000/nota/codigo/' + this.login.getMateria2() + '/' + this.login.getAlumnoCod2())
        .subscribe((res1: any) => {
          this.Nota = res1[0].valor;
        });
    });
    this.login.getAMateria('http://localhost:3000/materia/materia/' + this.login.getMateria2()).subscribe((res: any) => {
      this.NomMateria = res[0].NOM_MATERIA;
    });
  }

  onCerrar() {
    this.router.navigate(['estudianteInit']);
  }

}
