import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pordata',
  templateUrl: './pordata.component.html',
  styles: []
})
export class PordataComponent implements OnInit {

  forma: FormGroup;

  constructor() {
    this.forma = new FormGroup({
      nombre: new FormControl('',
        [
          Validators.required,
          Validators.minLength(4)
        ]),
      apellido: new FormControl('',
        [
          Validators.required,
          Validators.minLength(5)
      ]),
      correo: new FormControl('',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
      ])
    });
  }

  ngOnInit(
  ) {  }

  guardarCambios() {
    console.log('value', this.forma.value);
    console.log('obj', this.forma);
  }
}
