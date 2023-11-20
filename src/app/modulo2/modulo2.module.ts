import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Componente2Component } from './componente2/componente2.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [
    Componente2Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule, 
    MatButtonModule,
    MatGridListModule
  ]
})
export class Modulo2Module { }
