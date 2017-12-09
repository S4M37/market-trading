import { Component, OnInit} from "@angular/core";
import {UserService} from '../../shared/services/user.service';
import {User} from '../../_models/user';
import {Router} from '@angular/router';


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {


  login:string;
  password:string;
  loggedIn : boolean;


  constructor(private userService : UserService,private router: Router) {
   }

  ngOnInit() {
    this.login="";
    this.password="";
    this.loggedIn=false;
  }

  userLogin()
  {
    let user : User;
    user = new User();
    user.login=this.login;
    user.password=this.password;
    this.userService.getUser(user).subscribe(
      user => {
        if (Object.keys(user).length > 0)
        {
          this.loggedIn=true;
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.router.navigate(['/']);
        }
        else{
          this.login="False";
          this.password="false";
        }
        
      });
  }

}
