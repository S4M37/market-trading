import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {TradingRoutingModule} from "./trading.routing";
import { CurrentTradingComponent } from './current-trading/current-trading.component';
import { HistoryTradingComponent } from './history-trading/history-trading.component';

@NgModule({
  imports: [
    CommonModule,
    TradingRoutingModule
  ],
  declarations: [CurrentTradingComponent, HistoryTradingComponent]
})
export class ManageTradingModule { }
