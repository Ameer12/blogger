import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  
  constructor(private _http: Http) { }
  getService(){
    return this._http.get("http://jsonplaceholder.typicode.com/users");
  }
}
