import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Docente } from '../../model/docente';

@Component({
  selector: 'app-editar-docente',
  templateUrl: './editar-docente.component.html',
  styleUrls: ['./editar-docente.component.css']
})
export class EditarDocenteComponent implements OnInit {

  constructor(private router: Router, private login: LoginService) { }

  docente: Docente = new Docente();

  ngOnInit() {
  }

  onCancel() {
    this.router.navigate(['admin']);
  }

  onEdit() {
    this.login.editDocente('http://localhost:3000/docente/' + this.docente.doc_docente , this.docente).subscribe(
      data => {
        this.router.navigate(['admin']);
      }
    );
  }

}
