import {Component, OnInit} from "@angular/core";

declare let jQuery: any;

@Component({
  selector: "app-market-performance",
  templateUrl: "./market-performance.component.html",
  styleUrls: ["./market-performance.component.css"]
})
export class MarketPerformanceComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const barOptions = {
      series: {
        bars: {
          show: true,
          barWidth: 43200000
        }
      },
      xaxis: {
        mode: "time",
        timeformat: "%m/%d",
        minTickSize: [2, "day"]
      },
      grid: {
        hoverable: true
      },
      legend: {
        show: false
      },
      tooltip: true,
      tooltipOpts: {
        content: "x: %x, y: %y"
      }
    };
    const barData_hausses = {
      label: "bar",
      color: "green",
      data: [
        [1355223600000, 3000],
        [1355306400000, 4000],
        [1355487300000, 2000],
        [1355571900000, 6000]
      ]
    };
    const barData_baisses = {
      label: "bar",
      color: "red",
      data: [
        [1355223600000, 8000],
        [1355306400000, 4000],
        [1355487300000, 5000],
        [1355571900000, 1000]
      ]
    };
    const barData_quantities = {
      label: "bar",
      color: "blue",
      data: [
        [1355223600000, 8000],
        [1355306400000, 4000],
        [1355487300000, 5000],
        [1355571900000, 1000]
      ]
    };
    const barData_volumes = {
      label: "bar",
      color: "yellow",
      data: [
        [1355223600000, 4000],
        [1355306400000, 4000],
        [1355487300000, 2000],
        [1355571900000, 2000]
      ]
    };
    jQuery.plot(jQuery("#flot-bar-chart-baisses"), [barData_baisses], barOptions);
    jQuery.plot(jQuery("#flot-bar-chart-hausses"), [barData_hausses], barOptions);
    jQuery.plot(jQuery("#flot-bar-chart-quantities"), [barData_quantities], barOptions);
    jQuery.plot(jQuery("#flot-bar-chart-volumes"), [barData_volumes], barOptions);

  }

}
