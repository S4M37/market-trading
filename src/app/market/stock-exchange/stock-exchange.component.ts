import {Component, OnInit} from "@angular/core";
import {FixService} from "../../shared/services/fix.service";
import {Order} from "../../_models/order";
import {MarketService} from "../../shared/services/market.service";
import {CourtChange} from "../../_models/court-change";


declare let jQuery: any;
declare let swal: any;
declare let PNotify: any;

@Component({
  selector: "app-stock-exchange",
  templateUrl: "./stock-exchange.component.html",
  styleUrls: ["./stock-exchange.component.css"]
})
export class StockExchangeComponent implements OnInit {

  newOrder: Order;
  courtChanges: Array<CourtChange>;

  constructor(private fixService: FixService, private marketService: MarketService) {
  }

  ngOnInit() {
    this.newOrder = new Order();

    this.getMarketInfo();
  }

  private getMarketInfo() {
    this.marketService.getMarketInfo().subscribe(data => {
      this.courtChanges = data;
    });
  }

  openTradingModal() {
    jQuery("#modalTrading").modal();
    jQuery("#range_01").ionRangeSlider({
      min: 0,
      max: 1000,
      from: 100
    });
  }

  sendOrder() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const order = new Order();
    order.id_user = currentUser.id;
    order.exec = "No";
    order.id_cours = 0;
    order.type = 1;
    order.exec = "ATP";
    order.qte = 20;
    order.prix = 50;
    this.fixService.passNewOrder(order).subscribe(
      res => {
        console.log(res);
        //Default code
        jQuery("#modalTrading").modal("hide");
        jQuery.toast({
          heading: "Success",
          text: "Your order is sent ...",
          position: "top-right",
          loaderBg: "#fff",
          icon: "success",
          hideAfter: 3500,
          stack: 6
        });


      });

  }
}
