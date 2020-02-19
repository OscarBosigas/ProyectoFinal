import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Estudiante } from '../../model/estudiante';
import { Estructura } from '../../model/estructura';
import { Materia } from '../../model/materia';
import { Nota } from '../../model/nota';

@Component({
  selector: 'app-calificar-estudiante',
  templateUrl: './calificar-estudiante.component.html',
  styleUrls: ['./calificar-estudiante.component.css']
})
export class CalificarEstudianteComponent implements OnInit {

  constructor(private login: LoginService, private router: Router) { }

  Nombre = '';
  NombreMateria = '';
  nota: Nota = new Nota();
  estudiante: Estudiante = new Estudiante();
  materia: Materia = new Materia();
  estructuras: Estructura[];
  docEstudiante = '';

  valor = 0;
  final = 0;

  ngOnInit() {
    this.login.getEstudianteByCod('http://localhost:3000/estudiante/codigo/' + this.login.getEstudiante2()).subscribe(
      (res: any) => {
      this.estudiante.nombre = res[0].NOMBRE;
      this.estudiante.apellido = res[0].APELLIDO;
      this.login.getEstudianteDoc(res[0].DOC);
      this.Nombre = this.estudiante.nombre + ' ' + this.estudiante.apellido;
      });

    this.login.getMateriaById('http://localhost:3000/materia/' + this.login.getMateria2()).subscribe((res: any) => {
      this.materia.cod_materia = res[0].COD_MATERIA;
      this.materia.nom_materia = res[0].NOM_MATERIA;
      this.materia.cod_periodo = res[0].COD_PERIODO;
      this.NombreMateria = '' + this.materia.nom_materia + ' - ' + 'Periodo: ' + this.materia.cod_periodo;
    });

    this.login.getEstructura('http://localhost:3000/estructura/' + this.login.getMateria2()).
    subscribe(data => this.estructuras = data
    );
  }

  onGuardar(value: number) {
    this.final = this.final + ((this.valor * value) / 100);
  }

  onLimpiar() {
    this.final = 0;
  }

  onCerrar() {
    alert('Los datos no guardados se perderan');
    this.router.navigate(['calificar']);
  }

  onCalificar() {
    if (this.final > 5) {
      alert('El valor supera la nota maxima');
      this.final = 0;
    } else {
      this.nota.doc = this.login.getEstudianteDoc2();
      this.nota.cod_materia = this.login.getMateria2();
      this.nota.valor = this.final;
      this.login.calificar('http://localhost:3000/nota', this.nota).subscribe(
        data =>  {alert('Guardado');
                  this.router.navigate(['calificar']);
        }
      );
    }
  }
}
