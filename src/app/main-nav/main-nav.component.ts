import { Component, OnInit } from '@angular/core';
import {User} from '../_models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logOut()
  {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

}
