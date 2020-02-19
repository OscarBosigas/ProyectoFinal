import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './components/init/init.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminComponent } from './components/admin/admin.component';
import { AgregarDocenteComponent } from './components/agregar-docente/agregar-docente.component';
import { AgregarEstudianteComponent } from './components/agregar-estudiante/agregar-estudiante.component';
import { EditarDocenteComponent } from './components/editar-docente/editar-docente.component';
import { EditarEstudianteComponent } from './components/editar-estudiante/editar-estudiante.component';
import { EliminarDocenteComponent } from './components/eliminar-docente/eliminar-docente.component';
import { EliminarEstudianteComponent } from './components/eliminar-estudiante/eliminar-estudiante.component';
import { DocenteInitComponent } from './components/docente-init/docente-init.component';
import { EstudianteInitComponent } from './components/estudiante-init/estudiante-init.component';
import { AdminMateriaComponent } from './components/admin-materia/admin-materia.component';
import { CalificarComponent } from './components/calificar/calificar.component';
import { EditMateriaComponent } from './components/edit-materia/edit-materia.component';
import { AgregarMateriaComponent } from './components/agregar-materia/agregar-materia.component';
import { CalificarEstudianteComponent } from './components/calificar-estudiante/calificar-estudiante.component';
import { EditarCalificacionComponent } from './components/editar-calificacion/editar-calificacion.component';
import { EstadisticaComponent } from './components/estadistica/estadistica.component';


const routes: Routes = [
  { path: '', component: InitComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'agregarDocente', component: AgregarDocenteComponent },
  { path: 'agregarEstudiante', component: AgregarEstudianteComponent },
  { path: 'editarDocente', component: EditarDocenteComponent },
  { path: 'editarEstudiante', component: EditarEstudianteComponent },
  { path: 'eliminarDocente', component: EliminarDocenteComponent },
  { path: 'eliminarEstudiante', component: EliminarEstudianteComponent},
  { path: 'docenteInit', component: DocenteInitComponent },
  { path: 'estudianteInit', component: EstudianteInitComponent },
  { path: 'adminMateria', component: AdminMateriaComponent },
  { path: 'calificar', component: CalificarComponent },
  { path: 'editMateria', component: EditMateriaComponent },
  { path: 'agregarMateria', component: AgregarMateriaComponent },
  { path: 'calificarEstudiante', component: CalificarEstudianteComponent },
  { path: 'editarCal', component: EditarCalificacionComponent },
  { path: 'estadistica', component: EstadisticaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
