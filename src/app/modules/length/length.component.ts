import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Length } from './length.model';

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styleUrls: ['./length.component.scss']
})
export class LengthComponent implements OnInit {
  lengthTypes = { 
    'Nm': 1, 
    'mm': 1000, 
    'Mm': 1e6, 
    'Cm': 1e7, 
    'In': 2.54e7, 
    'f': 3.048e8, 
    'Y': 9.144e8, 
    'm': 1e9, 
    'Km': 1e12, 
    'Mi': 1.609e12, 
    'NM': 1.852e12
  }

  lengths: Length[] = [
    {
      id: 'Nm',
      name: 'Nanometre'
    },
    {
      id: 'mm',
      name: 'Micrometre'
    },
    {
      id: 'Mm',
      name: 'Millimetre'
    },
    {
      id: 'Cm',
      name: 'Centimetre'
    },
    {
      id: 'In',
      name: 'Inch'
    },
    {
      id: 'f',
      name: 'Foot'
    },
    {
      id: 'Y',
      name: 'Yard'
    },
    {
      id: 'm',
      name: 'Metre'
    },
    {
      id: 'Km',
      name: 'Kilometre'
    },
    {
      id: 'Mi',
      name: 'Mile'
    },
    {
      id: 'NM',
      name: 'Nautical Mile'
    }
  ];

  lengthForm: FormGroup;
  result: number;

  constructor(){}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.lengthForm = new FormGroup({
      amount: new FormControl(null, [
        Validators.required
      ]),
      fromValue: new FormControl(null, [
        Validators.required
      ]),
      toValue: new FormControl(null, [
        Validators.required
      ]),
    })
  }

  calculate(): void {
    const amount = this.lengthForm.get('amount')?.value;
    const toValue = this.lengthForm.get('toValue')?.value;
    const fromValue = this.lengthForm.get('fromValue')?.value;

    this.result = parseInt(amount)*(this.lengthTypes[fromValue as keyof typeof this.lengthTypes]/this.lengthTypes[toValue as keyof typeof this.lengthTypes])
  }

  switchType(): void {
    const prevFrom = this.lengthForm.get('fromValue')?.value;
    this.lengthForm.controls['fromValue'].setValue(this.lengthForm.get('toValue')?.value);
    this.lengthForm.controls['toValue'].setValue(prevFrom);
    this.calculate();
  }
}
