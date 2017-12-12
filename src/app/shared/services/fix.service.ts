import { Injectable } from '@angular/core';
import {Order} from '../../_models/order';
import {Http, Headers,Response, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import * as Rx from "rxjs/Rx";

@Injectable()
export class FixService {
  REST_SERVICE_URI : string;
  constructor(private http:Http) {
    this.REST_SERVICE_URI = 'http://localhost:8081/fix/'
   }

  passNewOrder(order : Order)
  {
    return this.http.get(this.REST_SERVICE_URI+'achat_vente',JSON.stringify(order))
    .map(res => res.json());
  }

}
