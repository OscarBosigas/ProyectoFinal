import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Estudiante } from '../../model/estudiante';

@Component({
  selector: 'app-olvidar-estudiante',
  templateUrl: './olvidar-estudiante.component.html',
  styleUrls: ['./olvidar-estudiante.component.css']
})
export class OlvidarEstudianteComponent implements OnInit {

  constructor(private router: Router, private login: LoginService) { }

  estudiante: Estudiante = new Estudiante();

  ngOnInit() {
  }

  onCancel() {
    this.router.navigate(['olvidar']);
  }

  onEdit() {
    this.login.cambiarContrasenaEstudiante('http://localhost:3000/cambiarContrasena/estudiante/' + this.estudiante.doc
      + '/' + this.estudiante.nombre + '/' + this.estudiante.apellido, this.estudiante).subscribe(data =>
        this.router.navigate([''])
      );
  }

}
