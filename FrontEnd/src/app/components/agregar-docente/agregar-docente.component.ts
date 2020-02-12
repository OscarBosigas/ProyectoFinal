import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-docente',
  templateUrl: './agregar-docente.component.html',
  styleUrls: ['./agregar-docente.component.css']
})
export class AgregarDocenteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCancel(){
    this.router.navigate(['admin']);
  }

  onAdd(){
    this.router.navigate(['admin']);
  }

}
