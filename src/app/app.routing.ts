import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MainNavComponent} from "./main-nav/main-nav.component";
import {LoginComponent} from "./user/login/login.component";
import {RegisterComponent} from "./user/register/register.component";
import {UserProfileComponent} from "./user/user-profile/user-profile.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PageNotFoundComponent} from "./error/page-not-found/page-not-found.component";

export const routes: Routes = [
  /*{
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },*/
  {
    path: "login",
    component: LoginComponent,
  }, {
    path: "register",
    component: RegisterComponent,
  }, {
    path: "",
    component: MainNavComponent,
    children: [
      {
        path: "",
        component: UserProfileComponent
      }, {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "trading",
        loadChildren: "./manage-trading/manage-trading.module#ManageTradingModule"
      },
      {
        path: "market",
        loadChildren: "./market/market.module#MarketModule"
      }]
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
