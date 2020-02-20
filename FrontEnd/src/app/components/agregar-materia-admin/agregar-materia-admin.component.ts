import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Materia } from '../../model/materia';

@Component({
  selector: 'app-agregar-materia-admin',
  templateUrl: './agregar-materia-admin.component.html',
  styleUrls: ['./agregar-materia-admin.component.css']
})
export class AgregarMateriaAdminComponent implements OnInit {

  constructor(private login: LoginService, private router: Router) { }

  materia: Materia = new Materia();

  ngOnInit() {
  }

  onCancel() {
    this.router.navigate(['admin']);
  }

  onAdd() {
    this.login.addMateria('http://localhost:3000/materia', this.materia).subscribe(
      data =>
        this.router.navigate(['admin'])
    );
  }

}
