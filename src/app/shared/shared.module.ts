import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedService} from "./services/shared.service";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [],
  providers: [SharedService]
})
export class SharedModule {
}
