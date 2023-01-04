import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDropDownComponent } from './form-drop-down/form-drop-down.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
  FormDropDownComponent
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [...components],
})
export class CommonFormModule {}
