import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-borrar-materia',
  templateUrl: './borrar-materia.component.html',
  styleUrls: ['./borrar-materia.component.css']
})
export class BorrarMateriaComponent implements OnInit {

  constructor(private router: Router, private login: LoginService) { }

  codMateria = 0;

  ngOnInit() {
  }

  onCancel() {
    this.router.navigate(['admin']);
  }

  onDelete() {
    this.login.deleteMateria('http://localhost:3000/materia/' + this.codMateria).subscribe(data =>
      this.router.navigate(['admin']));
  }

}
