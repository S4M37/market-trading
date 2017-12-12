import {Component, OnInit} from "@angular/core";



declare let swal: any;
declare let jQuery: any;

@Component({
  selector: "app-current-trading",
  templateUrl: "./current-trading.component.html",
  styleUrls: ["./current-trading.component.css"]
})
export class CurrentTradingComponent implements OnInit {

  

  constructor() {
  }

  ngOnInit() {
    
  }

  deleteOrder() {
    swal({
        title: "Attention !",
        text: "Wana Delete this order?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#EF5350",
        confirmButtonText: "Oui, supprimer!",
        cancelButtonText: "Non, annuler.",
        closeOnConfirm: true,
        closeOnCancel: true
      },
      function (isConfirm) {
        if (isConfirm) {
          jQuery.toast({
            heading: "Deleted",
            text: "Your order is deleted...",
            position: "top-right",
            loaderBg: "#fff",
            icon: "error",
            hideAfter: 3500,
            stack: 6
          });
        }
      });
  }


}
