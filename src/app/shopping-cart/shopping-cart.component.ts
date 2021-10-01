import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { UserService } from '../services/user.service';
import { UserInfo } from '../services/userInfo';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart$
  appUser: UserInfo;
  constructor(private scs : ShoppingCartService , public service: AuthService) {
    this.service.AppUser$.subscribe(newappUser => this.appUser = newappUser);
  }

  async ngOnInit(): Promise<void> {
    this.cart$ = await this.scs.getcartt();
  }

}