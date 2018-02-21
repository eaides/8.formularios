import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-pordata',
  templateUrl: './pordata.component.html',
  styles: []
})
export class PordataComponent implements OnInit {

  // usuario: Object = {
  //   nombre: 'Ernesto',
  //   apellido: 'Aides',
  //   correo: 'eaides@hotmail.com'
  // };
  usuario: Object = {
    nombrecompleto: {
      nombre: 'Ernesto',
      apellido: 'Aides'
    },
    correo: 'eaides@hotmail.com',
    pasatiempos: ['']
  };

  forma: FormGroup;

  constructor() {
    this.forma = new FormGroup({
      nombrecompleto: new FormGroup({
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
      }),
      correo: new FormControl('',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
      ]),
      pasatiempos: new FormArray([
        new FormControl('', Validators.required )
      ])
    });

    // the set value must receive an object with the same 'structure'
    // of the formgroups anidation
    this.forma.setValue( this.usuario );
  }

  ngOnInit(
  ) {  }

  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    );
  }

  guardarCambios() {
    console.log('value', this.forma.value);
    console.log('obj', this.forma);
    console.log('usuario', this.usuario);
    this.forma.reset( {
      nombre: '',
      apellido: '',
      correo: '',
      pasatiempos: []
    });
  }

}
