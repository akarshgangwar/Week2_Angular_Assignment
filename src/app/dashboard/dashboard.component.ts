import { Component, OnInit } from '@angular/core';
import { foodItemModel } from '../models/food-item.model';
import { FoodItemService } from '../services/food-item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  foodItemList:foodItemModel[]=[];
  constructor(private food_item_Service:FoodItemService) { }

  ngOnInit(): void {
    this.foodItemList=this.food_item_Service.foodItems;
    // console.log(this.foodItemList)
  }

}
