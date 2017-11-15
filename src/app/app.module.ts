import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";


import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app.routing";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";
import {MainNavComponent} from "./main-nav/main-nav.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ErrorModule} from "./error/error.module";
import {ManageTradingModule} from "./manage-trading/manage-trading.module";
import {UserModule} from "./user/user.module";


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ErrorModule,
    UserModule,
    ManageTradingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
