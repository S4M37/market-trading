import {Component, OnInit} from "@angular/core";
import {Cours} from '../../_models/cours';
import {PalmaresService} from '../../shared/services/palmares.service';

declare let jQuery: any;

@Component({
  selector: "app-market-performance",
  templateUrl: "./market-performance.component.html",
  styleUrls: ["./market-performance.component.css"]
})
export class MarketPerformanceComponent implements OnInit {

  dataH:string;
  dataB: any[];

  constructor(private palmaresService : PalmaresService) {
  }

  ngOnInit() {
    this.dataH="[";
    this.dataB=new Array(5);
    this.palmaresService.getpalmaresH()
    .subscribe(res => {
      let testOne:number = 1;
      for (let p of res) {
        console.log(p.nom +p.valeur);
        this.dataH = this.dataH+"["+1355223600000+","+p.valeur*1000+"]";
        this.dataB[testOne-1]= new Array(2);
        this.dataB[testOne-1][0]=1355487300000;
        this.dataB[testOne-1][1]=8000;

        if (testOne < res.length)
        {
          this.dataH += ",";
          testOne++;
        }
    }
    this.dataH += "]";
    console.log("data =>"+this.dataH);
    console.log("dataB => "+JSON.stringify(this.dataB));
    });

    const barOptions = {
      series: {
        bars: {
          show: true,
          barWidth: 33200000
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
      data: JSON.stringify(this.dataB)
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
        [1355571900000, 1000],
        [1355223600000, 8000]
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
