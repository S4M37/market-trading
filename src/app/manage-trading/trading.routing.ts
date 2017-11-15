import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CurrentTradingComponent} from "./current-trading/current-trading.component";
import {HistoryTradingComponent} from "./history-trading/history-trading.component";

export const routes: Routes = [
  {
    path: "current",
    component: CurrentTradingComponent
  }, {
    path: "history",
    component: HistoryTradingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradingRoutingModule {
}
