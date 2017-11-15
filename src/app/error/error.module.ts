import {NgModule} from "@angular/core";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent]
})
export class ErrorModule {
}
