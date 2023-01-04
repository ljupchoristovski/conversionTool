import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, shareReplay } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DataService {
    constructor(private http: HttpClient) { }

    convertCurrencies(payload: any): Observable<any> {
        const url = `https://api.exchangerate.host/convert?from=${payload.fromValue}&to=${payload.toValue}&amount=${payload.amount}`;
        return this.http.get<any>(url).pipe(
            shareReplay()
        );
    }

    getHistory(date: any): Observable<any> {
        const url = `https://api.exchangerate.host/${date}?base=USD`;
        return this.http.get<any>(url).pipe(
            map(res => {
                return Object.keys(res.rates).map(key => ({type: key, value: res.rates[key]}))
            }),
            shareReplay()
        );
    }
}