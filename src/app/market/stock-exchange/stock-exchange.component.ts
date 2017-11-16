import {Component, OnInit} from "@angular/core";

declare let jQuery: any;
declare let swal: any;
declare let PNotify: any;

@Component({
  selector: "app-stock-exchange",
  templateUrl: "./stock-exchange.component.html",
  styleUrls: ["./stock-exchange.component.css"]
})
export class StockExchangeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
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
  }
}
