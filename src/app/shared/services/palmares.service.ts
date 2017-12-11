import { Injectable } from '@angular/core';
import {Http, Headers,Response, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import * as Rx from "rxjs/Rx";
import {Cours} from '../../_models/cours';


@Injectable()
export class PalmaresService {
  REST_SERVICE_URI:string;
  

  constructor(private http:Http) {
    this.REST_SERVICE_URI = 'http://localhost:8081/palmares';
   }

  getpalmaresH()
  {
    return this.http.get(this.REST_SERVICE_URI+`/B`).map(res => res.json());
  }

  
  

}
