import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '../app.rest';
import { AppConfig} from '../app.config'
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


    @Output()
    change = new EventEmitter();

    
    public getAllCarts(){
        return this.http.get('cart')
        .map((res) => {
               return res.json().map((item) => {
                item.imageUrl = AppConfig.API_ENDPOINT  + item.imageUrl;
                return item;
            });
        } , (err)=> { throw err });
        
    }

    public removeCart(id: string) {
        
        return this.http.delete('cart' + '/' + id)
        .map((res) => {
            return res.json();
        }, (err) => {
            throw err;
        })
    }
}