import { Component, Input, OnInit } from '@angular/core';
import { orderItemModel } from '../models/orderItem.model';
import { orderItemService } from '../services/order-food.service';

@Component({
  selector: 'app-your-orders',
  templateUrl: './your-orders.component.html',
  styleUrls: ['./your-orders.component.css']
})
export class YourOrdersComponent implements OnInit {
 orderItemList:orderItemModel[]=[];
  constructor(private order_item_services:orderItemService) { }

  ngOnInit(): void {

    this.orderItemList=this.order_item_services.orderItems;
    console.log("running",this.orderItemList)

  }

}
