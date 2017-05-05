import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable'
import { AppConfig } from './app.config'; 

function urlify(value: boolean){
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(descriptor.value);
    }
}

@Injectable()
export class HttpClient {

  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', localStorage['token']); 
  }


  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(AppConfig.API_ENDPOINT+url, {
      headers: headers
    });
  }

  post(url, data) : Observable<any> {
      
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(AppConfig.API_ENDPOINT+url, data, {
      headers: headers
    });
  }

}