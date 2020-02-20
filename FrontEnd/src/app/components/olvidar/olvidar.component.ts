import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-olvidar',
  templateUrl: './olvidar.component.html',
  styleUrls: ['./olvidar.component.css']
})
export class OlvidarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onEstudiante() {
    this.router.navigate(['olvidarEstudiante']);
  }

  onDocente() {
    this.router.navigate(['olvidarDocente']);
  }

}
