import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MarketPerformanceComponent} from "./market-performance/market-performance.component";
import {StockExchangeComponent} from "./stock-exchange/stock-exchange.component";
import {CurrencyComponent} from "./currency/currency.component";

export const routes: Routes = [
  {
    path: "performance",
    component: MarketPerformanceComponent,
  }, {
    path: "stock-exchange",
    component: StockExchangeComponent,
  }, {
    path: "currency",
    component: CurrencyComponent,
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule {
}
