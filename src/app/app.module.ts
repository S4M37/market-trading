import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app.routing";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";
import {MainNavComponent} from "./main-nav/main-nav.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ErrorModule} from "./error/error.module";
import {ManageTradingModule} from "./manage-trading/manage-trading.module";
import {UserModule} from "./user/user.module";
import {MarketService} from "./shared/services/market.service";
import {FixService} from "./shared/services/fix.service";
import {PalmaresService} from "./shared/services/palmares.service";
import {UserService} from "./shared/services/user.service";
import {StorageService} from "./shared/services/storage.service";


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
    ManageTradingModule,
    HttpModule
  ],
  providers: [
    MarketService,
    FixService,
    PalmaresService,
    UserService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
