import { Component, OnInit } from '@angular/core';
import {User} from '../../_models/user';
import {UserService} from '../../shared/services/user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser: User;
  //For the update
  updatedUser : User;

  

  constructor(private userService :UserService,private router: Router) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.updatedUser = new User();
    this.updatedUser.budget=this.currentUser.budget;
    this.updatedUser.id=this.currentUser.id;
    this.updatedUser.name=this.currentUser.name;
    this.updatedUser.login=this.currentUser.login;
    this.updatedUser.password=this.currentUser.password;
    this.updatedUser.phone=this.currentUser.phone;
    this.updatedUser.email=this.currentUser.email;
  }

  updateProfile()
  {
    this.userService.updateUser(this.updatedUser).subscribe(
      user => {
        if (Object.keys(user).length > 0)
        {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.updateObject();
          this.router.navigate(['/']);
        }
        else{
          localStorage.removeItem('currentUser');
          this.router.navigate(['/login']);
        }
        
      });
  }

  updateObject()
  {
    this.updatedUser.budget=this.currentUser.budget;
    this.updatedUser.id=this.currentUser.id;
    this.updatedUser.name=this.currentUser.name;
    this.updatedUser.login=this.currentUser.login;
    this.updatedUser.password=this.currentUser.password;
    this.updatedUser.phone=this.currentUser.phone;
    this.updatedUser.email=this.currentUser.email;
  }

 
}
