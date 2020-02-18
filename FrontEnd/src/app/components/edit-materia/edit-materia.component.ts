import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Estructura } from '../../model/estructura';

@Component({
  selector: 'app-edit-materia',
  templateUrl: './edit-materia.component.html',
  styleUrls: ['./edit-materia.component.css']
})
export class EditMateriaComponent implements OnInit {

  constructor(private login: LoginService, private router: Router) { }

  estructura: Estructura = new Estructura();

  ngOnInit() {
    console.log(this.login.getDesc2() + ' dasas ' + this.login.getMateria2());
  }

  onCancel() {
    this.router.navigate(['adminMateria']);
  }

  onEdit() {
    this.login.editEstructura('http://localhost:3000/estructura/' + this.login.getMateria2() + '/' +
     this.login.getDesc2(), this.estructura)
      .subscribe(data =>
        this.router.navigate(['adminMateria']));
  }

}
