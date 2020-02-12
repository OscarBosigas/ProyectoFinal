import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-docente',
  templateUrl: './editar-docente.component.html',
  styleUrls: ['./editar-docente.component.css']
})
export class EditarDocenteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCancel() {
    this.router.navigate(['admin']);
  }

  onEdit() {
    this.router.navigate(['admin']);
  }

}
