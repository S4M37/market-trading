import {Injectable} from "@angular/core";
import {Order} from "../../_models/order";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class FixService {
  REST_SERVICE_URI: string;

  constructor(private http: Http) {
    this.REST_SERVICE_URI = "http://localhost:8081/fix/";
  }

  passNewOrder(order: Order) {
    return this.http.get(this.REST_SERVICE_URI + "achat_vente", JSON.stringify(order))
      .map(res => res.json());
  }

}
