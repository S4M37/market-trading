import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedService} from "./services/shared.service";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {MomentModule} from "angular2-moment";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MomentModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MomentModule
  ],
  declarations: [],
  providers: [SharedService]
})
export class SharedModule {
}
