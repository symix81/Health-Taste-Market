import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { take } from 'rxjs/operators';
import { ProdInfo } from 'src/app/services/prodinfo.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  categories$;
  sales$;
  product: ProdInfo = {
    category: '',
    imageUrl: '',
    price: 0,
    title: '',
    sale: 0,
    suppliername: '',
    supplieremail: '',
  }
  id:string;
  sale : boolean = false;
  constructor(
    private router: Router,
    private catgSvr: CategoriesService,
    private productServices: ProductsService,
    private route: ActivatedRoute,) {

    this.categories$ = catgSvr.getCategories();
    this.sales$ = catgSvr.getSales();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.categories$ = this.catgSvr.getCategories();
      this.sales$ = this.catgSvr.getSales();
      //help to unsubscribe just when we take the ID
      this.productServices.getByID(this.id).pipe(take(1)).subscribe(pro => {
        if (pro) {
          this.product = pro;
        }
      })
    }
  }


  save(product) {
    if (this.id) {
      //if there is id means that you were on edit form
      this.productServices.update(this.id, product);
    }
    else {
      //you want to create
      this.productServices.create(product);
    }
    this.router.navigateByUrl('/admin/products');
  }//end save method

  delete() {
    if (confirm('Are you sure you want to delete this item?')) {
      this.productServices.delete(this.id);
    }
    this.router.navigateByUrl('/admin/products');
  }

}
