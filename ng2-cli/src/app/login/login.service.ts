import { Injectable } from '@angular/core'
import {Observable} from 'rxjs';
import { HttpClient } from '../app.rest';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class AuthService {

    constructor(
      private http : HttpClient,
         private router: Router
         ) {   }
    
    public login(payload){
      return this.http.post('auth/login',payload)
      .map((res) => {
         return res.json();
      },(err) => {
          throw err;
      });

    }
    public signup(payload){
      return this.http.post('auth/signup',payload)
      .map((res) => {
        return res.json();
      }, (err) => {
        throw err;
      })
    }
    public logout(){
      localStorage.removeItem('token');
    }
 
}