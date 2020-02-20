import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Docente } from '../../model/docente';

@Component({
  selector: 'app-olvidar-docente',
  templateUrl: './olvidar-docente.component.html',
  styleUrls: ['./olvidar-docente.component.css']
})
export class OlvidarDocenteComponent implements OnInit {

  constructor(private router: Router, private login: LoginService) { }

  docente: Docente = new Docente();

  ngOnInit() {
  }

  onCancel() {
    this.router.navigate(['olvidar']);
  }

  onEdit() {
    this.login.cambiarContrasenaDocente('http://localhost:3000/cambiarContrasena/docente/' + this.docente.doc_docente
     + '/' + this.docente.nom_docente + '/' + this.docente.apellido_doc, this.docente).subscribe(data =>
      this.router.navigate([''])
    );
  }

}
