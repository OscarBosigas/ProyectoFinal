import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  public email = '';
  public password = '';

  constructor(private router: Router) { }


  ngOnInit() {
  }

  contacto() {
    this.router.navigate(['contact']);
  }

  onLogIn() {
  }

  restablecimiento() {
    this.router.navigate(['']);
  }
}
