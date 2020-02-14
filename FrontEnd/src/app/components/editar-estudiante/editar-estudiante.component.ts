import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from '../../model/estudiante';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.css']
})
export class EditarEstudianteComponent implements OnInit {

  constructor(private router: Router, private login: LoginService) { }

  estudiante: Estudiante = new Estudiante();

  ngOnInit() {
  }

  onCancel() {
    this.router.navigate(['admin']);
  }

  onEdit() {
    this.login.editEstudiate('http://localhost:3000/estudiante/' + this.estudiante.doc, this.estudiante).subscribe(
      data => {
        this.router.navigate(['admin']);
      }
    );
  }

}
