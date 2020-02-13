import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  public usuario = '';
  public contrasena = '';

  constructor(private router: Router , private login: LoginService) { }


  ngOnInit() {
  }

  contacto() {
    this.router.navigate(['contact']);
  }

  onLogIn() {
    this.login.getJson('http://localhost:3000/login/' + this.usuario + '/' + this.contrasena).subscribe((res: any) => {
    if (res === null) {
      alert('El usuario o la contraseña no coindicen con ninguna cuenta');
    } else if (res.length > 0) {
      if (res[0].rol === 3) {
        this.router.navigate(['admin']);
      }
      if (res[0].rol === 1) {
        this.router.navigate(['estudianteInit']);
      }
      if (res[0].rol === 2) {
        this.router.navigate(['docenteInit']);
      }
      } else {
        alert('El usuario o la contraseña no coindicen con ninguna cuenta');
      }
    });
  }

  restablecimiento() {
    this.router.navigate(['']);
  }

}
