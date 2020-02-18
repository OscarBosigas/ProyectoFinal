import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Estructura } from '../../model/estructura';

@Component({
  selector: 'app-agregar-materia',
  templateUrl: './agregar-materia.component.html',
  styleUrls: ['./agregar-materia.component.css']
})
export class AgregarMateriaComponent implements OnInit {

  constructor(private login: LoginService, private route: Router) { }

  estructura: Estructura = new Estructura();

  ngOnInit() {
  }

  onAdd() {
    this.estructura.cod_materia = this.login.getMateria2();
    this.login.addEstructura('http://localhost:3000/estructura', this.estructura).subscribe(data =>
      this.route.navigate(['adminMateria']));
  }

  onCancel() {
    this.route.navigate(['adminMateria']);
  }

}
