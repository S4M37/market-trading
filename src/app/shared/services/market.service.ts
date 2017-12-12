import {GenericService} from "./generic.service";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Config} from "../config";
import {Observable} from "rxjs/Observable";
import {CourtChange} from "../../_models/court-change";

@Injectable()
export class MarketService extends GenericService {
  constructor(private http: HttpClient) {
    super();

  }

  getMarketInfo(): Observable<Array<CourtChange>> {
    const url = Config.baseUrl + "/court-change";

    return <Observable<Array<CourtChange>>>this.http.get(url);
  }
}
