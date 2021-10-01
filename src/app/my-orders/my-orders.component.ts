import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Order(event: any){
    confirm('Your order is on the way!')
    event.target.disabled = true;
  }

}
