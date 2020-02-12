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


const routes: Routes = [
  { path: '', component: InitComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'agregarDocente', component: AgregarDocenteComponent },
  { path: 'agregarEstudiante', component: AgregarEstudianteComponent },
  { path: 'editarDocente', component: EditarDocenteComponent },
  { path: 'editarEstudiante', component: EditarEstudianteComponent },
  { path: 'eliminarDocente', component: EliminarDocenteComponent },
  { path: 'eliminarEstudiante', component: EliminarEstudianteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
