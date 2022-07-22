import { Injectable } from '@angular/core';
import { foodItemModel } from '../models/food-item.model';


@Injectable({
  providedIn: 'root'
})
export class FoodItemService {
  foodItems:foodItemModel[]=[
   
    {
        name:'Sti fry Pasta',
        description:'The in-house pasta and chicken by chef Moose',
        path:'../../../assets/img/food-item.svg',
        price:'N 1000.00',
        totalItemsAvailable:10
    },
    {
        name:'Mggi',
        description:'The in-house pasta and chicken by chef Moose',
        path:'../../../assets/img/fooditem2.svg',
        price:'N 5000.00',
        totalItemsAvailable:10
    },
    {
        name:' Pasta',
        description:'The in-house pasta and chicken by chef Moose',
        path:'../../../assets/img/fooditem3.svg',
        price:'N 1000.00',
        totalItemsAvailable:10
    },
    {
        name:'Sti fry Pasta',
        description:'The in-house pasta and chicken by chef Moose',
        path:'../../../assets/img/fooditem4.svg',
        price:'N 1000.00',
        totalItemsAvailable:10
    },
    {
        name:'Sti fry Pasta',
        description:'The in-house pasta and chicken by chef Moose',
        path:'../../../assets/img/fooditem3.svg',
        price:'N 1000.00',
        totalItemsAvailable:10
    },
    {
        name:'Sti fry Pasta',
        description:'The in-house pasta and chicken by chef Moose',
        path:'../../../assets/img/fooditem2.svg',
        price:'N 1000.00',
        totalItemsAvailable:10
    },
  ]

  constructor() { }
}