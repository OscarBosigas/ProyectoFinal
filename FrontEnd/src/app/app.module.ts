import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitComponent } from './components/init/init.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminComponent } from './components/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
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
import { ChartsModule } from  'ng2-charts';
import { OlvidarComponent } from './components/olvidar/olvidar.component';
import { OlvidarDocenteComponent } from './components/olvidar-docente/olvidar-docente.component';
import { OlvidarEstudianteComponent } from './components/olvidar-estudiante/olvidar-estudiante.component';
import { AgregarMateriaAdminComponent } from './components/agregar-materia-admin/agregar-materia-admin.component';
import { BorrarMateriaComponent } from './components/borrar-materia/borrar-materia.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    ContactComponent,
    AdminComponent,
    AgregarDocenteComponent,
    AgregarEstudianteComponent,
    EditarDocenteComponent,
    EditarEstudianteComponent,
    EliminarDocenteComponent,
    EliminarEstudianteComponent,
    DocenteInitComponent,
    EstudianteInitComponent,
    AdminMateriaComponent,
    CalificarComponent,
    EditMateriaComponent,
    AgregarMateriaComponent,
    CalificarEstudianteComponent,
    EditarCalificacionComponent,
    EstadisticaComponent,
    OlvidarComponent,
    OlvidarDocenteComponent,
    OlvidarEstudianteComponent,
    AgregarMateriaAdminComponent,
    BorrarMateriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
