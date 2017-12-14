import {Component, OnInit} from "@angular/core";
import {UserService} from "../../shared/services/user.service";


declare let swal: any;
declare let jQuery: any;

@Component({
  selector: "app-current-trading",
  templateUrl: "./current-trading.component.html",
  styleUrls: ["./current-trading.component.css"]
})
export class CurrentTradingComponent implements OnInit {

  carnetOrder: { [index: string]: any; } = {};
  courts: Array<string> = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUserCarnetOrder();

  }

  private getUserCarnetOrder() {
    this.userService.getUserCarnetOrder().subscribe(data => {
      this.carnetOrder = data;
      for (const key in this.carnetOrder) {
        this.courts.push(key);
      }
    });
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
