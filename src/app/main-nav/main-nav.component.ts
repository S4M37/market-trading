import {Component, OnInit} from "@angular/core";
import {User} from "../_models/user";
import {Router} from "@angular/router";
import {StorageService} from "../shared/services/storage.service";

@Component({
  selector: "app-main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrls: ["./main-nav.component.css"]
})
export class MainNavComponent implements OnInit {


  currentUser: User;

  constructor(private storageService: StorageService, private router: Router) {
  }

  ngOnInit() {
    if (!this.storageService.isExist("currentUser")) {
      this.router.navigate(["/login"]);
    } else {
      this.currentUser = this.storageService.read("currentUser");
    }
  }

  logOut() {
    localStorage.removeItem("currentUser");
    this.router.navigate(["/login"]);
  }

}
