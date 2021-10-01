import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent{

  suppName;
  constructor(private prodServ : ProductsService , private db : AngularFireDatabase , private router : Router)
  {
    this.suppName = this.prodServ.getProdSupp();
  }

  
  save(data) {
    this.prodServ.counter = this.prodServ.counter + 1;
    
    if(this.prodServ.oldRate == 0){
      this.prodServ.datarate = Number(data.rate);
    this.prodServ.oldRate = this.prodServ.datarate;
    }
    else{
      this.prodServ.datarate = Number(data.rate);
      this.prodServ.oldRate = this.prodServ.oldRate + this.prodServ.datarate;
    }
    let totalrate = this.prodServ.oldRate/this.prodServ.counter;

    this.db.list('/ratings/'+this.prodServ.getProdSupp()).set('rate',totalrate);
    this.db.list('/suppliers/'+this.prodServ.getProdSupp()).set('rate',totalrate);
    confirm("Thanks for your Rating!");
    this.router.navigateByUrl('products');
  }

}
