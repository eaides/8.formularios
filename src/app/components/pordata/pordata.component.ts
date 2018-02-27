import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

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
    pasatiempos: [''],
    username: '',
    password1: '',
    password2: ''
  };

  asyncErrors: Object = {
    existeusuario: '',
  };

  forma: FormGroup;

  constructor() {
    this.forma = new FormGroup({
      nombrecompleto: new FormGroup({
        nombre: new FormControl('',
          [
            Validators.required,
            Validators.minLength(3)
          ]),
        apellido: new FormControl('',
          [
            Validators.required,
            Validators.minLength(4),
            this.noAids
          ]),
      }),
      correo: new FormControl('',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
      ]),
      pasatiempos: new FormArray([
        new FormControl('', Validators.required )
      ]),
      'username': new FormControl(''),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl(),
    });

    this.forma.controls['username'].setValidators([
      Validators.required
    ]);
    this.forma.controls['username'].setAsyncValidators([
      this.existeUsuario.bind(this.asyncErrors)
    ]);

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.notTheSame.bind( this.forma )
    ]);

    // subscribe to changes of any data of the form
    // this.forma.valueChanges.subscribe( data => {
    //   console.log(data);
    // });

    // subscribe to one field data changes
    this.forma.controls['username'].valueChanges.subscribe( data => {
      console.log(data);
    });

    // and/OR subscribe to one field status changes
    this.forma.controls['username'].statusChanges.subscribe( data => {
      console.log(data);
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
    // this.forma.reset( {
    //   nombre: '',
    //   apellido: '',
    //   correo: '',
    //   pasatiempos: []
    // });
  }

  noAids(control: FormControl): {[s: string]: boolean} {
    // console.log(control.value.toLocaleLowerCase());
    if (control.value.toLocaleLowerCase() === 'aids') {
      return {
        noaids: true
      };
    }
    return null;
  }

  notTheSame(control: FormControl): {[s: string]: boolean} {
    const forma1: any = this;
    if (control.value !== forma1.controls['password1'].value) {
      return {
        notthesame: true
      };
    }
    return null;
  }

  existeUsuario(control: FormControl): Promise<any>|Observable<any> {
    const asyncErrors1: any = this;
    const promesa = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value.toLocaleLowerCase() === 'eaides') {
            asyncErrors1.existeusuario = 'El username ya existe';
            resolve( {existeusuario: true});
          } else {
            resolve(null);
          }
        }, 3000);
      }
    );
    return promesa;
  }

}
