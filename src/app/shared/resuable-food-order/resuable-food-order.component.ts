import { Component, Input, OnInit } from '@angular/core';
import { orderItemModel } from 'src/app/models/orderItem.model';

@Component({
  selector: 'app-resuable-food-order',
  templateUrl: './resuable-food-order.component.html',
  styleUrls: ['./resuable-food-order.component.css']
})
export class ResuableFoodOrderComponent implements OnInit {
@Input() orderItems:orderItemModel;
  constructor() { }

  ngOnInit(): void {
    console.log("aka",this.orderItems)
  }

}
