import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private db:AngularFireDatabase) { }

  getCategories(){
    return this.db.list('/categories').valueChanges();
  }
  getSales(){
    return this.db.list('/sales').valueChanges();
  }
  getSuppliers(){
    return this.db.list('/suppliers/').valueChanges();
  }
  getRatings(){
    return this.db.list('/ratings/').valueChanges();
  }
  
}