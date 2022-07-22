import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FoodItemDescriptionComponent } from "./food-item-description/food-item-description.component";
import { LoginComponent } from "./login/login.component";
import { FoodCartComponent } from "./shared/food-cart/food-cart.component";
import { ResuableFoodOrderComponent } from "./shared/resuable-food-order/resuable-food-order.component";
import { SignupComponent } from "./signup/signup.component";
import { YourCartComponent } from "./your-cart/your-cart.component";


const appRoutes:Routes=[
    {path:'', component:AppComponent,pathMatch:'full'}, //redirected
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'makepayment',component:CheckoutComponent},
    {path:'fooddetail',component:FoodItemDescriptionComponent},
    {path:'yourCart',component:YourCartComponent},
    {path:'yourfood',component:FoodItemDescriptionComponent},
    {path:'resuableFoodOders',component:ResuableFoodOrderComponent},






]


@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}