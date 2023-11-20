import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component {
  
  contactoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required],
    });
  }

  enviarFormulario() {
    if (this.contactoForm.valid) {
      // Aquí puedes enviar los datos del formulario a tu servidor o realizar otras acciones
      console.log('Formulario válido', this.contactoForm.value);
    } else {
      // Manejar el caso cuando el formulario no es válido
      console.log('Formulario no válido');
    }
  }

}
