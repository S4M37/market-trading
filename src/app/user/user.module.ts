import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [UserProfileComponent, LoginComponent, RegisterComponent]
})
export class UserModule {
}
