import { Component, OnInit, ɵConsole } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Materia } from '../../model/materia';
import { Estudiante } from '../../model/estudiante';
import { Docente } from '../../model/docente';
import { Label } from 'ng2-charts';
import { ChartDataSets, ChartType, RadialChartOptions, ChartOptions } from 'chart.js';
import { Nota } from '../../model/nota';

@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.component.html',
  styleUrls: ['./calificar.component.css']
})
export class CalificarComponent implements OnInit {

  constructor(private login: LoginService, private router: Router) { }

  estudiantes: Estudiante[];
  docente: Docente = new Docente();
  materia: Materia = new Materia();

  docDocente: string;
  NomMateria = '';
  Nombre = '';
  doc2: string;


  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [{data: [2, 2], label: 'Notas'}];



  ngOnInit() {
    this.docDocente = this.login.getUsuario2();
    this.login.getADocente('http://localhost:3000/docente/' + this.docDocente).subscribe((res: any) => {
      this.docente.doc_docente = res[0].DOC_DOCENTE;
      this.docente.nom_docente = res[0].NOM_DOCENTE;
      this.docente.apellido_doc = res[0].APELLIDO_DOC;
      this.Nombre = this.docente.nom_docente + ' ' + this.docente.apellido_doc;
    });
    this.login.getMateriaById('http://localhost:3000/materia/materia/' + this.login.getMateria2()).subscribe((res: any) => {
      this.materia.cod_materia = res[0].COD_MATERIA;
      this.materia.nom_materia = res[0].NOM_MATERIA;
      this.materia.cod_periodo = res[0].COD_PERIODO;
      this.NomMateria = ' - ' + this.materia.nom_materia + ' - ' + 'Periodo: ' + this.materia.cod_periodo;
    });
    this.login.getEstudiantesPorMateria('http://localhost:3000/materia/estudiantes/' + this.login.getMateria2()).
    subscribe(data1 => {
      this.estudiantes = data1;
      const names = data1.map(data1=> data1.nombre);
      console.log(names);
      this.barChartLabels = names;
    });
    this.login.getNotasMateria('http://localhost:3000/nota/materia/' + this.login.getMateria2()).subscribe( data1 => {
      const values = data1.map(data1 => data1.valor);
      console.log(values);
      this.barChartData = [
        { data: [0], label: ''}, { data: values, label: 'Notas'}];
    });
  }

  onCerrar() {
    this.router.navigate(['docenteInit']);
  }

  onCalificar(doc: string) {
    let x: any;
    this.login.getEstudiante(doc);
    this.login.getNota('http://localhost:3000/nota/codigo/' +
        this.login.getMateria2() + '/' + doc).subscribe(res => {
          x = res[0];
          if (x !== undefined) {
            alert('El estudiante ya cuenta con nota en esta asignatura, se editara si continua');
            this.router.navigate(['editarCal']);
          } else {
            this.router.navigate(['calificarEstudiante']);
          }

        });

  }

}
