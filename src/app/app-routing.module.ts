import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";


const appRoutes:Routes=[
    {path:'', component:AppComponent,pathMatch:'full'},
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'dashboard',component:DashboardComponent},



]


@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}