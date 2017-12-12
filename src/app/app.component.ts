import {Component} from "@angular/core";
import {PalmaresService} from './shared/services/palmares.service';
import {UserService} from './shared/services/user.service';
import {FixService} from './shared/services/fix.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [PalmaresService,UserService,FixService]
})
export class AppComponent {
}
