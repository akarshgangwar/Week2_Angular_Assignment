import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './shared/input/input.component';
import { FoodItemComponent } from './shared/food-item/food-item.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    FoodItemComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    SidebarComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,FormsModule,AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
