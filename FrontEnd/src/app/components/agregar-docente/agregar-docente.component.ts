import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Docente } from '../../model/docente';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-agregar-docente',
  templateUrl: './agregar-docente.component.html',
  styleUrls: ['./agregar-docente.component.css']
})
export class AgregarDocenteComponent implements OnInit {

  constructor(private router: Router, private login: LoginService) { }

  docente: Docente = new Docente();

ngOnInit() {
  }

onCancel() {
    this.router.navigate(['admin']);
  }

onAdd() {
  this.login.addDocente('http://localhost:3000/docente', this.docente).subscribe(
    data => {
      this.router.navigate(['admin']);
    }
  );
}

}
