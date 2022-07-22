import { Component, Input, OnInit } from '@angular/core';
import { cartModel } from 'src/app/models/cart-item.model';

@Component({
  selector: 'app-food-cart',
  templateUrl: './food-cart.component.html',
  styleUrls: ['./food-cart.component.css']
})
export class FoodCartComponent implements OnInit {
@Input() cartItemm:cartModel;
  constructor() { }

  ngOnInit(): void {
    console.log(this.cartItemm)
  }

}
