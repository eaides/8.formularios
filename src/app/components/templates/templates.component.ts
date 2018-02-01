import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
        /*border: 1px solid red;*/
    }
  `]
})
export class TemplatesComponent implements OnInit {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: '',
    sexo: 'H',
    acepta: false
  };

  paises: Object[] = [
      {
        codigo: 'ISR',
        pais: 'Israel'
      },
      {
          codigo: 'ARG',
          pais: 'Argentina'
      },
      {
          codigo: 'ESP',
          pais: 'Spain'
      },
      {
          codigo: 'USA',
          pais: 'United States'
      }
  ];

  sexos: Object[] = [
      {
          codigo: 'H',
          sexo: 'Hombre'
      },
      {
          codigo: 'M',
          sexo: 'Mujer'
      },
      {
          codigo: 'S',
          sexo: 'Sin Definir'
      }
  ];

  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log('post form !');
    console.log('ngForm', forma);
    console.log('value', forma.value);
    console.log('usuario', this.usuario);
  }
}
