import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';



@NgModule({
  declarations: [
    Componente1Component
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class Modulo1Module { }
