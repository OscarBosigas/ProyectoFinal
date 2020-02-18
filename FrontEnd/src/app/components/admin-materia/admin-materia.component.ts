import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Docente } from '../../model/docente';
import { Materia } from '../../model/materia';
import { Estructura } from '../../model/estructura';

@Component({
  selector: 'app-admin-materia',
  templateUrl: './admin-materia.component.html',
  styleUrls: ['./admin-materia.component.css']
})
export class AdminMateriaComponent implements OnInit {

  constructor(private router: Router, private login: LoginService) { }

  docente: Docente = new Docente();
  materia: Materia = new Materia();
  estructura: Estructura = new Estructura();
  estructuras: Estructura[];
  docDocente: string;
  Nombre = '';
  NombreMateria = '';

  idMateria = 0;

  editDesc = '';
  editValue = '';

  editDesc2 = '';
  editCod = 0;

  ngOnInit() {
    this.docDocente = this.login.getUsuario2();
    this.login.getADocente('http://localhost:3000/docente/' + this.docDocente).subscribe((res: any) => {
      this.docente.doc_docente = res[0].DOC_DOCENTE;
      this.docente.nom_docente = res[0].NOM_DOCENTE;
      this.docente.apellido_doc = res[0].APELLIDO_DOC;
      this.Nombre = this.docente.nom_docente + ' ' + this.docente.apellido_doc;
    });
    this.idMateria = this.login.getMateria2();
    this.login.getMateriaById('http://localhost:3000/materia/' + this.idMateria).subscribe((res: any) => {
      this.materia.cod_materia = res[0].COD_MATERIA;
      this.materia.nom_materia = res[0].NOM_MATERIA;
      this.materia.cod_periodo = res[0].COD_PERIODO;
      this.NombreMateria = '' + this.materia.nom_materia + ' - ' +  'Periodo: ' + this.materia.cod_periodo;
    });
    this.login.getEstructura('http://localhost:3000/materia/estructura/' + this.idMateria).subscribe(data => this.estructuras = data);
  }

  onCerrar() {
    let num = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.estructuras.length; index++) {
      num += this.estructuras[index].value;
    }
    if (num === 100) {
      this.router.navigate(['docenteInit']);
    } else {
      alert('La suma de los porcentajes debe de ser 100. Actualmente es: ' + num);
    }
  }

  onAgregar() {
      this.router.navigate(['agregarMateria']);
  }

  onEliminar(cod_materia: number, descripcion: string) {
    this.login.deleteEstructura('http://localhost:3000/estructura/' + cod_materia + '/' + descripcion)
      .subscribe(data =>
        this.ngOnInit());
  }

  onEditar(desc: string) {
    this.login.getDesc(desc);
    this.router.navigate(['editMateria']);
  }

}
