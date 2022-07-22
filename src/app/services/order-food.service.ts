import { Injectable } from '@angular/core';
import { orderItemModel } from '../models/orderItem.model';



@Injectable({
  providedIn: 'root'
})
export class orderItemService {
  orderItems:orderItemModel[]=[
    {
        name:'Oid-123412345',
        quantity:4,
        path:'',
        status:'delivered',
        price:'Rs.5000'
    },
    {
        name:'Oid-00023',
        quantity:8,
        path:'',
        status:'delivered',
        price:'Rs.9000'
    },
    {
        name:'Oid-2345',
        quantity:8,
        path:'',
        status:'delivered',
        price:'Rs.5000'
    },
    {
        name:'Oid-3450000',
        quantity:2,
        path:'',
        status:'cooking',
        price:'5000'
    },
  ];

  constructor() { }
}