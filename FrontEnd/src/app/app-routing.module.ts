import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './components/init/init.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  { path: '', component: InitComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
