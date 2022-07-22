import { Injectable } from '@angular/core';
import { cartModel } from '../models/cart-item.model';



@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  cartItems:cartModel[]=[ 
    {
        name:'Sti fry Pasta',
       quantity:4,
        path:'../../../assets/img/food-item.svg',
        price:'N 1000.00',
        subTotal:10
    },
    {
        name:'Mggi',
        quantity:4,
        path:'../../../assets/img/fooditem2.svg',
        price:'N 5000.00',
        subTotal:10
    },
    {
        name:' Pasta',
        quantity:4,
        path:'../../../assets/img/fooditem3.svg',
        price:'N 1000.00',
        subTotal:10
    },
    {
        name:'Sti fry Pasta',
        quantity:4,
        path:'../../../assets/img/fooditem4.svg',
        price:'N 1000.00',
        subTotal:10
    },

  ]

  constructor() { }
}