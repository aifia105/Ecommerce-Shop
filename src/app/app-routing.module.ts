import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AppComponent } from './app.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { ProductDetailComponent } from './components/shop-list/product-detail/product-detail.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SearchComponent } from './components/search/search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserComponent } from './components/user/user.component';
import { AccountManagementComponent } from './components/user/account-management/account-management.component';

const routes: Routes = [
  {path: "", redirectTo: "hero" , pathMatch :"full"},
  {path: "hero", data: {breadcrumb:"Hero"} , component:HeroComponent},
  {path: "shop", data: {breadcrumb:"Shop"} , component:ShopListComponent},
  {path: "user", data: {breadcrumb:"User"} , component:UserComponent, children: [
    {path: "" , component:AccountManagementComponent, outlet: 'userOutlet'}
  ]},
  {path: "product-detail", data: {breadcrumb:"ProductDetail"} , component:ProductDetailComponent},
  {path: "about-us", data: {breadcrumb:"AboutUs"} , component:AboutUsComponent},
  {path: "auth/login", data: {breadcrumb:"Login"} , component:LoginComponent},
  {path: "auth/register", data: {breadcrumb:"Register"} , component:RegisterComponent},
  {path: "contact-us", data: {breadcrumb:"ContactUs"} , component:ContactUsComponent},
  {path: "search", data: {breadcrumb:"Search"} , component:SearchComponent},
  {path: "**", data: {breadcrumb:"NotFound"} , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
