import {Component, OnInit} from "@angular/core";
import {UserService} from "../../shared/services/user.service";
import {Wallet} from "../../_models/wallet";

@Component({
  selector: "app-my-balance",
  templateUrl: "./my-balance.component.html",
  styleUrls: ["./my-balance.component.css"]
})
export class MyBalanceComponent implements OnInit {

  wallet: Array<Wallet>;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUserWallet().subscribe(data => {
      this.wallet = data;
    });
  }

}
