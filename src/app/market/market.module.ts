import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MarketPerformanceComponent} from "./market-performance/market-performance.component";
import {StockExchangeComponent} from "./stock-exchange/stock-exchange.component";
import {MarketRoutingModule} from "./market.routing";
import { CurrencyComponent } from './currency/currency.component';

@NgModule({
  imports: [
    CommonModule,
    MarketRoutingModule
  ],
  declarations: [MarketPerformanceComponent, StockExchangeComponent, CurrencyComponent]
})
export class MarketModule {
}
