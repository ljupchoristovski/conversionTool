import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import { Currency } from './currency.model';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  currencies: Currency[] = [
    {
      id: 1,
      name: 'EUR'
    },
    {
      id: 2,
      name: 'USD'
    },
    {
      id: 3,
      name: 'CAD'
    },
    {
      id: 4,
      name: 'INR'
    },
    {
      id: 5,
      name: 'JPY'
    },
    {
      id: 6,
      name: 'KRW'
    }
  ];
  amount: string;
  result: Observable<any>;
  historyResult: Observable<any>;
  currencyForm: FormGroup;
  displayedColumns: string[] = ['type', 'value'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.currencyForm = new FormGroup({
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
    const payload = {
      amount: this.currencyForm.get('amount')?.value,
      toValue: this.currencyForm.get('toValue')?.value,
      fromValue: this.currencyForm.get('fromValue')?.value
    }

    this.result = this.dataService.convertCurrencies(payload);
  }

  switchType(): void {
    const prevFrom = this.currencyForm.get('fromValue')?.value;
    this.currencyForm.controls['fromValue'].setValue(this.currencyForm.get('toValue')?.value);
    this.currencyForm.controls['toValue'].setValue(prevFrom);
    this.calculate();
  }

  showHistory(): void {
    const currentDate = formatDate(new Date(), 'YYYY-MM-dd', 'en-US');
    this.dataService.getHistory(currentDate).subscribe(res => {
      this.dataSource.data = res;

      // because of the condition of dataSource before showing the table
      setTimeout(()=>{
        this.dataSource.paginator = this.paginator;
       })
    });
  }
}
