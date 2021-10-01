import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy , OnInit {

  products : any[];
  filteredProducts : any[];
  SubScribe : Subscription;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();


  constructor(private productServices : ProductsService) {
   this.SubScribe = this.productServices.getAll().subscribe(prod => {
    this.filteredProducts = this.products = prod;
    // Calling the DT trigger to manually render the table
    this.dtTrigger.next();
   });
  }



  filter(queryString : string){
    if(queryString){
      this.filteredProducts =
      this.products.filter(p => p.payload.val().title.toLowerCase().includes(queryString.toLowerCase()))
    }
    else{
      this.filteredProducts = this.products;
    }
  }
 
  
  ngOnDestroy(): void {
    this.SubScribe.unsubscribe();
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
  }

}
}
