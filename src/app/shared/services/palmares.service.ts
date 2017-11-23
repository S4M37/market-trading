import { Injectable } from '@angular/core';
import {Http, Headers,Response, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import * as Rx from "rxjs/Rx";
import {Cours} from '../../cours';


@Injectable()
export class PalmaresService {

  constructor(private http:Http) { }

  getpalmaresH()
  {
    return this.http.get(`/palmaresH`).map(res => res.json());
  }

  
  

}
