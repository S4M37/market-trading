import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {GenericService} from "./generic.service";
import {HttpClient} from "@angular/common/http";
import {User} from "../../_models/user";
import {StorageService} from "./storage.service";
import {Observable} from "rxjs/Observable";
import {Wallet} from "../../_models/wallet";
import {UserOrder} from "../../_models/user-order";


@Injectable()
export class UserService extends GenericService {


  REST_SERVICE_URI: string;

  currentUser: User;

  constructor(private http: HttpClient, private storageService: StorageService) {
    super();
    this.REST_SERVICE_URI = "http://localhost:8081/user/";
    this.currentUser = this.storageService.read("currentUser");
  }


  private extractData(res) {
    return res;
  }


  getUser(user) {
    return this.http.get(this.REST_SERVICE_URI + "find/" + user.login + "/" + user.password, user)
      .catch(this.extractData);

  }

  updateUser(user) {
    return this.http.put(this.REST_SERVICE_URI + user.id, user);
  }

  getUserWallet(): Observable<Array<Wallet>> {
    return <Observable<Array<Wallet>>>this.http.get(this.REST_SERVICE_URI + this.currentUser.id + "/wallet");
  }

  getUserOrderHistory() {
    return <Observable<Array<UserOrder>>>this.http.get(this.REST_SERVICE_URI + this.currentUser.id + "/order");
  }

  getUserCarnetOrder() {
    return <Observable<Map<string, Array<UserOrder>>>>this.http.get(this.REST_SERVICE_URI + this.currentUser.id + "/carnet-order");
  }
}
