import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './services/user.service';
import { ProductsService } from './services/products.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private AuthServ : AuthService , router : Router , private userService : UserService){
  }
}