import { Injectable } from '@angular/core';
import {Http, Headers,Response, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import * as Rx from "rxjs/Rx";
import {User} from '../../_models/user';


@Injectable()
export class UserService {


  REST_SERVICE_URI : string;
  
  constructor(private http:Http){
    this.REST_SERVICE_URI = 'http://localhost:8081/user/'
  }


  private extractData(res: Response) {        
    return res.text() ? res.json() : {}; ;
}


  getUser(user)
  {
     return this.http.get(this.REST_SERVICE_URI+'find/'+user.login+'/'+user.password,JSON.stringify(user))
     .map(this.extractData);
  }

  updateUser(user)
  {
    return this.http.put(this.REST_SERVICE_URI+ user.id, user).map(this.extractData);
  }

}
