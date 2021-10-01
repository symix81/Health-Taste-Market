import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserInfo } from '../services/userInfo';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  appUser: UserInfo;
  shoppingCartCounter;
  constructor(public service: AuthService , private router : Router) {
    this.service.AppUser$.subscribe(newappUser => this.appUser = newappUser);
}


  logout() {
    this.service.logout();
  }
  showRatings(){
    this.router.navigateByUrl('rate');
  }

  async ngOnInit(): Promise<void> {
    this.shoppingCartCounter = sessionStorage.getItem('counter');
  }
}
