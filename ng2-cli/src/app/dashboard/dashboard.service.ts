import { Injectable } from '@angular/core';
import { HttpClient } from '../app.rest'
@Injectable()
export class DashboardService {
    constructor(
        private http: HttpClient
    ){}
    public addCart(payload) {
       return this.http.post('cart',payload)
       .map((res) => {
            return res.json();
       },(err) => {
           throw err;
       })
    }
}