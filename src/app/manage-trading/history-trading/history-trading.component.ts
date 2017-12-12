import {Component, OnInit} from "@angular/core";
import {UserService} from "../../shared/services/user.service";
import {UserOrder} from "../../_models/user-order";

@Component({
  selector: "app-history-trading",
  templateUrl: "./history-trading.component.html",
  styleUrls: ["./history-trading.component.css"]
})
export class HistoryTradingComponent implements OnInit {

  orderHistory: Array<UserOrder>;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUserOrderHistory().subscribe(data => {
      this.orderHistory = data;
    });
  }

}
