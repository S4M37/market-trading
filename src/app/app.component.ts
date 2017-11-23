import {Component} from "@angular/core";
import {PalmaresService} from './shared/services/palmares.service';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [PalmaresService]
})
export class AppComponent {
}
