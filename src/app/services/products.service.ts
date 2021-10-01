import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  isAdmin;
  prodSupp;
  username:string;
  counter : number = 0;
  oldRate : number = 0;
  datarate : number = 0;
  constructor(private db: AngularFireDatabase , private authServ : AuthService) {
    this.authServ.AppUser$.subscribe(user => this.isAdmin = user.isAdmin);
  }

 setProdSupp(name){
  this.prodSupp = name;
 }

 getProdSupp(){
  return this.prodSupp;
 }

 setUsername(name:string){
  this.username = name;
 }
 getUsername(){
  return this.username;
 }


  create(product) {//to create new product
    this.db.list('/products/' + this.username).push(product);
    this.db.list('/products/').push(product);
  }
  
  getAll() {//to view all products
    if(this.isAdmin === false){
      return this.db.list('/products/').snapshotChanges();
    }
    else{
    return this.db.list('/products/' + this.username).snapshotChanges();
  }
}

  
  


  getByID(productID: string) {//to get the product we want to edit
    return this.db.object('/products/' + this.username + '/' + productID).valueChanges();
  }


  update(productID: string, product) {//to edit the product
    return this.db.object('/products/' + this.username + '/' + productID).update(product);
  }

  delete(productID: string) {//to delete the product
    return this.db.object('/products/' + this.username + '/' + productID).remove();
  }


}
