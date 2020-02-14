import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Estudiante } from '../../model/estudiante';

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.css']
})
export class AgregarEstudianteComponent implements OnInit {

  constructor(private router: Router, private login: LoginService) { }

  estudiante: Estudiante = new Estudiante();

  ngOnInit() {
  }

  onCancel() {
    this.router.navigate(['admin']);
  }

  onAdd() {
    this.login.addEstudiante('http://localhost:3000/estudiante', this.estudiante).subscribe(
      data => {
        this.router.navigate(['admin']);
      }
    );
  }

}
