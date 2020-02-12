import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-docente',
  templateUrl: './eliminar-docente.component.html',
  styleUrls: ['./eliminar-docente.component.css']
})
export class EliminarDocenteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCancel() {
    this.router.navigate(['admin']);
  }

  onDelete() {
    this.router.navigate(['admin']);
  }

}
