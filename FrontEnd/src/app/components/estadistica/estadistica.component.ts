import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Materia } from '../../model/materia';
import { Estudiante } from '../../model/estudiante';
import { Label } from 'ng2-charts';
import { ChartDataSets, ChartType, RadialChartOptions, ChartOptions } from 'chart.js';
import { Nota } from '../../model/nota';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {

  constructor(private login: LoginService, private router: Router) { }

  materia: Materia = new Materia();
  estudiante: Estudiante = new Estudiante();
  NomMateria: string;
  notas: Nota[];
  Nota = 0;
  Promedio = 0;

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
  public barChartLabels: Label[] = ['Periodo 1', 'Periodo 2', 'Pediodo 3', 'Periodo 4'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [{ data: [4], label: 'Alumno' },
                                          { data: [3], label: 'Promedio Curso' }];

  ngOnInit() {
    this.login.getAEstudiante('http://localhost:3000/estudiante/' + this.login.getUsuario2()).subscribe((res: any) => {
      this.estudiante.doc = res[0].DOC;
      this.estudiante.nombre = res[0].NOMBRE;
      this.estudiante.apellido = res[0].APELLIDO;
      this.login.getNota('http://localhost:3000/nota/codigo/' + this.login.getMateria2() + '/' + res[0].CODIGO)
        .subscribe((res1: any) => {
          this.login.getNotaG(res1[0].valor);
          this.Nota = res1.map(res1 => res1.valor);

          this.login.getNotasMateria('http://localhost:3000/nota/materia/' + this.login.getMateria2()).
          subscribe(data1 => {
            for (let index = 0; index < data1.length; index++) {
              this.Promedio += data1[index].valor;
            }
            this.Promedio = this.Promedio / data1.length;
            this.barChartData = [
                { data: [this.Nota], label: 'Alumno' },
                { data: [this.Promedio], label: 'Promedio Curso' },
                { data: [0], label: ''}
              ];
          });
        });
    });
    this.login.getAMateria('http://localhost:3000/materia/materia/' + this.login.getMateria2()).subscribe((res: any) => {
      this.NomMateria = res[0].NOM_MATERIA;
    });

  }

  onCerrar() {
    this.router.navigate(['estudianteInit']);
  }

}
