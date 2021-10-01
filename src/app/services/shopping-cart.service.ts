import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { take , map } from 'rxjs/operators';
import { Shoppingcart } from '../model/Shopping';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  constructor(private db : AngularFireDatabase , private prodSrv : ProductsService) {
  }

  private create(){
    return this.db.list('/shopping-carts').push({
      dateCreated : new Date().getTime()
    });
  }

  public async getcartt() : Promise<Observable<Shoppingcart>>{
    let cartID = await this.getOrCreateCartid();
    return this.db.object('/shopping-carts/'+cartID)
    .valueChanges().pipe(map(cart =>  new Shoppingcart(((cart as any).items))))
  }

  
  public async getcart() : Promise<AngularFireObject<Shoppingcart>>{
    let cartID = await this.getOrCreateCartid();
    return this.db.object('/shopping-carts/'+cartID);
  }


  private async getOrCreateCartid(){

    let cartID = localStorage.getItem('cartID');
    if(cartID) return this.prodSrv.getUsername();

    let result = await this.create();
    localStorage.setItem('cartID',result.key);
    return result.key;
  }



  getItem(cartId : string , productID : string){
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productID);
  }

  async addToCart(product: any){
    this.updateToCart(product,1);
  }

  async removeFromCart(product: any){
    this.updateToCart(product,-1);
  }



  async updateToCart(product , quantityState){
    let cartid = await this.getOrCreateCartid();
    let item$ = this.getItem(cartid , product.key);

    item$.snapshotChanges().pipe(take(1)).subscribe((item:any) =>{
      if(item.payload.exists())
      {
        item$.update({quantity : item.payload.val().quantity + quantityState});
      }
      else
      {
        item$.update({
          product: {
            
              title : product.payload.val().title ,
              price : product.payload.val().price ,
              category : product.payload.val().category ,
              imageUrl : product.payload.val().imageUrl
            
          },
          quantity : 1
        });
      
      }
    })
  }

  

 }
