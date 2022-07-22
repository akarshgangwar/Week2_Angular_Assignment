


import { Component, Input, OnInit } from '@angular/core';
import { foodItemModel } from 'src/app/models/food-item.model';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
@Input() foodItem:foodItemModel;

toggle2:boolean=false;
  constructor() { }
toggle:boolean=false;

  ngOnInit(): void {
    console.log(this.foodItem)
  }

}
