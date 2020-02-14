import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-eliminar-estudiante',
  templateUrl: './eliminar-estudiante.component.html',
  styleUrls: ['./eliminar-estudiante.component.css']
})
export class EliminarEstudianteComponent implements OnInit {

  constructor(private router: Router, private login: LoginService) { }

  docEstudiante: '';

  ngOnInit() {
  }

  onCancel() {
    this.router.navigate(['admin']);
  }

  onDelete() {
    this.login.deleteEstudiante('http://localhost:3000/estudiante/' + this.docEstudiante).subscribe(
      data => {
        this.router.navigate(['admin']);
      });
  }

}
