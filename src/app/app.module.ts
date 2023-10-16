import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { ProductDetailComponent } from './components/shop-list/product-detail/product-detail.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { UserComponent } from './components/user/user.component';
import { AccountManagementComponent } from './components/user/account-management/account-management.component';
import { OrderHistoryComponent } from './components/user/order-history/order-history.component';
import { PaymentComponent } from './components/user/payment/payment.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    NavbarComponent,
    ShopListComponent,
    ProductDetailComponent,
    AboutUsComponent,
    NotFoundComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    ContactUsComponent,
    UserComponent,
    AccountManagementComponent,
    OrderHistoryComponent,
    PaymentComponent,
    CartComponent,
    WishlistComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
