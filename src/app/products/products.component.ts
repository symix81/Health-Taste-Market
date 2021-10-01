import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ProductsService } from '../services/products.service';
import { switchMap } from 'rxjs/operators';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Shoppingcart } from '../model/IShoppingCart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit , OnDestroy {

  products: any[] = [];
  filteredProducts: any[] = [];
  category = '';
  subscription: Subscription;
  cart$:Observable<Shoppingcart>;
  cart;

  constructor(private productService: ProductsService,
    private route: ActivatedRoute,
    private scs : ShoppingCartService,
    ) {
      
    this.subscription = this.productService.getAll().pipe(switchMap(products => {
      this.products = products;
      return this.route.queryParamMap;
    }))
      .subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.payload.val().category === this.category) : this.products;
      })

  }
  async ngOnInit(): Promise<void> {
    (await this.scs.getcart()).valueChanges().subscribe(cart=>{
      this.cart = cart;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}