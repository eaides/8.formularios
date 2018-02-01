import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
        border: 1px solid red;
    }
  `]
})
export class TemplatesComponent implements OnInit {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null
  };
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
