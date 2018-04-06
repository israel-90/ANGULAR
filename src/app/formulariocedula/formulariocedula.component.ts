import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulariocedula',
  templateUrl: './formulariocedula.component.html',
  styleUrls: ['./formulariocedula.component.css']
})
export class FormulariocedulaComponent implements OnInit {

  campoRuc: any;
  formValidador: FormGroup;

  constructor(private fV: FormBuilder) { }

  ngOnInit() {
    this.formValidador = this.fV.group({
      campoRuc: [null, Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ])]
    });
  }

  onSubmit() {
    this.campoRuc = this.validarRuc();
  }

  validarRuc() {
    const validarRuc = {
      campoRuc: this.formValidador.get('campoRuc').value
    }
    return validarRuc;
  }

}
