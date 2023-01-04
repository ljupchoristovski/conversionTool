import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyComponent } from './currency.component';
import { CurrencyRoutingModule } from './currency-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonFormModule } from 'src/app/shared/forms/common-form.module';

@NgModule({
  declarations: [CurrencyComponent],
  imports: [
    CommonModule,
    CurrencyRoutingModule,
    MaterialModule,
    FormsModule,
    CommonFormModule,
    ReactiveFormsModule
  ],
  exports: [CurrencyComponent]
})
export class CurrencyModule { }
