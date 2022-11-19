import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularzComponent } from './formularz/formularz.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
{ path: 'lista', component: ListaComponent},
{ path: 'formularz', component: FormularzComponent},
{ path: '', redirectTo: '/formularz', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
