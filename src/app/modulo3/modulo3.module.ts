import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componente3Component } from './componente3/componente3.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    Componente3Component
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule
  ]
  
})
export class Modulo3Module { }
