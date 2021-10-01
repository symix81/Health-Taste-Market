import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  suppliers$
  constructor(private catgSrv : CategoriesService){
    this.suppliers$ = this.catgSrv.getSuppliers();
  }

  ngOnInit(): void {
  }

}
