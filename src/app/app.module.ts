import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FoodItemComponent } from './shared/food-item/food-item.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FoodItemService } from './services/food-item.service';
import { FoodItemDescriptionComponent } from './food-item-description/food-item-description.component';
import { FoodCartComponent } from './shared/food-cart/food-cart.component';
import { YourCartComponent } from './your-cart/your-cart.component';
import { YourOrdersComponent } from './your-orders/your-orders.component';
import { ResuableFoodOrderComponent } from './shared/resuable-food-order/resuable-food-order.component';


@NgModule({
  declarations: [
    AppComponent,
    
    FoodItemComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    SidebarComponent,
    CheckoutComponent,
    FoodItemDescriptionComponent,
    FoodCartComponent,
    YourCartComponent,
    YourOrdersComponent,
    ResuableFoodOrderComponent
  ],
  imports: [
    BrowserModule,FormsModule,AppRoutingModule
    
  ],
  providers: [FoodItemService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
