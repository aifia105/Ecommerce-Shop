import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AppComponent } from './app.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { ProductDetailComponent } from './components/shop-list/product-detail/product-detail.component';

const routes: Routes = [
  {path: "", redirectTo: "hero" , pathMatch :"full"},
  {path: "hero", data: {breadcrumb:"Hero"} , component:HeroComponent},
  {path: "shop", data: {breadcrumb:"Shop"} , component:ShopListComponent},
  {path: "product-detail", data: {breadcrumb:"ProductDetail"} , component:ProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
