import {GenericService} from "./generic.service";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Config} from "../config";
import {Observable} from "rxjs/Observable";
import {CourtChange} from "../../_models/court-change";
import {OrderRequest} from "../../_models/order-request";

@Injectable()
export class MarketService extends GenericService {
  constructor(private http: HttpClient) {
    super();

  }

  getMarketInfo(): Observable<Array<CourtChange>> {
    const url = Config.baseUrl + "/court-change";

    return <Observable<Array<CourtChange>>>this.http.get(url);
  }

  newOrder(orderRequest: OrderRequest, id_user: number) {
    const url = Config.baseUrl + "/user/" + id_user + "/order/";
    return this.http.post(url, orderRequest);
  }
}
