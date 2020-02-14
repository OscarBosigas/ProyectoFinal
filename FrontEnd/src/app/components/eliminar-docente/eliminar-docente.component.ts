import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-eliminar-docente',
  templateUrl: './eliminar-docente.component.html',
  styleUrls: ['./eliminar-docente.component.css']
})
export class EliminarDocenteComponent implements OnInit {

  constructor(private router: Router, private login: LoginService) { }

  docDocente: '';

  ngOnInit() {
  }

  onCancel() {
    this.router.navigate(['admin']);
  }

  onDelete() {
    this.login.deleteDocente('http://localhost:3000/docente/' + this.docDocente).subscribe(
      data => {
        this.router.navigate(['admin']);
      });
  }

}
