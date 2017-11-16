import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {TradingRoutingModule} from "./trading.routing";
import { CurrentTradingComponent } from './current-trading/current-trading.component';
import { HistoryTradingComponent } from './history-trading/history-trading.component';
import { MyBalanceComponent } from './my-balance/my-balance.component';

@NgModule({
  imports: [
    CommonModule,
    TradingRoutingModule
  ],
  declarations: [CurrentTradingComponent, HistoryTradingComponent, MyBalanceComponent]
})
export class ManageTradingModule { }
