import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-admin-materia',
  templateUrl: './admin-materia.component.html',
  styleUrls: ['./admin-materia.component.css']
})
export class AdminMateriaComponent implements OnInit {

  constructor(private router: Router, private login: LoginService) { }

  docDocente = this.login.getUsuario2();
  Nombre = '';
  NombreMateria = '';

  ngOnInit() {
    this.docDocente = this.login.getUsuario2();
    this.login.getADocente('http://localhost:3000/docente/' + this.docDocente).subscribe((res: any) => {
      this.docente.doc_docente = res[0].DOC_DOCENTE;
      this.docente.nom_docente = res[0].NOM_DOCENTE;
      this.docente.apellido_doc = res[0].APELLIDO_DOC;
      this.Nombre = this.docente.nom_docente + ' ' + this.docente.apellido_doc;
    });
    this.login.getMateriasDocente('http://localhost:3000/materia/docente/' + this.docDocente)
      .subscribe(data => this.materias = data);
  }

  onCerrar() {
    this.router.navigate(['docenteInit']);
  }

}
