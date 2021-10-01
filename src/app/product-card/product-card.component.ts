import { Component, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CategoriesService } from '../services/categories.service';
import { ProductsService } from '../services/products.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { UserInfo } from '../services/userInfo';
@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent{

  @Input('product') product: any = [];
  @Input('shoppingCart') shoppingCart;

  appUsr: UserInfo;
  constructor(private db : AngularFireDatabase , private catgSrv : CategoriesService , private prodSrv : ProductsService , private scs: ShoppingCartService, public service: AuthService, private router: Router) {
    this.service.AppUser$.subscribe(newappUser => this.appUsr = newappUser);
  }

  set(suppName : string){
    this.prodSrv.setProdSupp(suppName);
    this.router.navigateByUrl('rating');
  }

  addToCart() {
    if (this.appUsr) {
      this.scs.addToCart(this.product);
    }
    else {
      this.router.navigateByUrl('/login');
    }
  }
 
  removeFromCart() {
    if (this.appUsr) {
      this.scs.removeFromCart(this.product);
    }
    else {
      this.router.navigateByUrl('/login');
    }
  }
  getQuantity() {
    if (!this.shoppingCart) { return 0; }
    let item = this.shoppingCart.items[this.product.key];
    return item ? item.quantity : 0;
  }
}
