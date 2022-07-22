import { Component, OnInit } from '@angular/core';
import { cartModel } from '../models/cart-item.model';
import { CartItemService } from '../services/cart-item.service';
import { orderItemService } from '../services/order-food.service';

@Component({
  selector: 'app-your-cart',
  templateUrl: './your-cart.component.html',
  styleUrls: ['./your-cart.component.css']
})
export class YourCartComponent implements OnInit {
    cartListItem:cartModel[]=[];
  constructor(private cart_item_services:CartItemService) { }
toggle3=false;
  ngOnInit(): void {
    this.cartListItem=this.cart_item_services.cartItems;
    console.log(this.cartListItem)
  }

}
