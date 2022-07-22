import { Injectable } from '@angular/core';
import { foodItemModel } from '../models/food-item.model';


@Injectable({
  providedIn: 'root'
})
export class FoodItemService {
  foodItems:foodItemModel[]=[
    // {name:'Stir Fry Pasta',description:'The in-house pasta and chicken by chef Moose',imgPath:'../../../assets/image/dash-food-item-image.png',price:'1,000.00',time:'10-20',available:12},
    // {name:'Stir Fry Pasta',description:'The in-house pasta and chicken by chef Moose',imgPath:'../../../assets/image/dash-food-item-image.png',price:'1,000.00',time:'10-20',available:12},
    // {name:'Stir Fry Pasta',description:'The in-house pasta and chicken by chef Moose',imgPath:'../../../assets/image/dash-food-item-image.png',price:'1,000.00',time:'10-20',available:12},
    // {name:'Stir Fry Pasta',description:'The in-house pasta and chicken by chef Moose',imgPath:'../../../assets/image/dash-food-item-image.png',price:'1,000.00',time:'10-20',available:12},
    // {name:'Stir Fry Pasta',description:'The in-house pasta and chicken by chef Moose',imgPath:'../../../assets/image/dash-food-item-image.png',price:'1,000.00',time:'10-20',available:12},

    {
        name:'Sti fry Pasta',
        description:'The in-house pasta and chicken by chef Moose',
        path:'../../../assets/img/food-item.svg',
        price:'N 1000',
        totalItemsAvailable:10
    },
    {
        name:'Sti fry Pasta',
        description:'The in-house pasta and chicken by chef Moose',
        path:'../../../assets/img/food-item.svg',
        price:'N 1000',
        totalItemsAvailable:10
    },
    {
        name:'Sti fry Pasta',
        description:'The in-house pasta and chicken by chef Moose',
        path:'../../../assets/img/food-item.svg',
        price:'N 1000',
        totalItemsAvailable:10
    },
    {
        name:'Sti fry Pasta',
        description:'The in-house pasta and chicken by chef Moose',
        path:'../../../assets/img/food-item.svg',
        price:'N 1000',
        totalItemsAvailable:10
    },
  ]

  constructor() { }
}