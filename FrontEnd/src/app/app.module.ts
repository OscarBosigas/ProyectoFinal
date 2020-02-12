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
    EliminarEstudianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
