import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from './modulo1/componente1/componente1.component';
import { Componente2Component } from './modulo2/componente2/componente2.component';
import { Componente3Component } from './modulo3/componente3/componente3.component';


const routes: Routes = [
  { path: 'modulo1', component: Componente1Component },
  { path: 'modulo2', component: Componente2Component },
  { path: 'modulo3', component: Componente3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
