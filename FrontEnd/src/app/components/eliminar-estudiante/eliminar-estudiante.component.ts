import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-estudiante',
  templateUrl: './eliminar-estudiante.component.html',
  styleUrls: ['./eliminar-estudiante.component.css']
})
export class EliminarEstudianteComponent implements OnInit {

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
