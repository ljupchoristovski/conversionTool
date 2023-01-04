import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LengthComponent } from './length.component';
import { LengthRoutingModule } from './length-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonFormModule } from 'src/app/shared/forms/common-form.module';

@NgModule({
  declarations: [LengthComponent],
  imports: [
    CommonModule,
    LengthRoutingModule,
    MaterialModule,
    FormsModule,
    CommonFormModule,
    ReactiveFormsModule
  ],
  exports: [LengthComponent]
})
export class LengthModule { }
