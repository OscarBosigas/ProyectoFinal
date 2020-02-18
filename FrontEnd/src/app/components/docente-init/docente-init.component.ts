import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Docente } from '../../model/docente';
import { Materia } from '../../model/materia';

@Component({
  selector: 'app-docente-init',
  templateUrl: './docente-init.component.html',
  styleUrls: ['./docente-init.component.css']
})
export class DocenteInitComponent implements OnInit {

  constructor(private router: Router, private login: LoginService) { }

  docente: Docente = new Docente();
  materia: Materia = new Materia();

  materias: Materia[];

  docDocente = '';
  Nombre = '';

  nombreMateria: string;

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
    this.router.navigate(['']);
  }

  onAdministrar(mat: number) {
    this.login.getMateria(mat);
    this.router.navigate(['adminMateria']);
  }

  onCalificar() {
    this.router.navigate(['calificar']);
  }

}
