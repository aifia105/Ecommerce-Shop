import { NgModule, isDevMode } from '@angular/core';
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
import { ProfileInformationComponent } from './components/user/profile-information/profile-information.component';
import { ManageAddressComponent } from './components/user/manage-address/manage-address.component';
import { ChangePasswordComponent } from './components/user/change-password/change-password.component';
import { ManageCardComponent } from './components/user/manage-card/manage-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule, provideStore } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { authFeatureKey, authReducer } from './components/auth/store/reducers';
import * as authEffects from'./components/auth/store/effect'
import { HttpClientModule } from '@angular/common/http';


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
    ProfileInformationComponent,
    ManageAddressComponent,
    ChangePasswordComponent,
    ManageCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({authFeatureKey: authReducer}),
    EffectsModule.forRoot([authEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode(), autoPause:true, trace: false, traceLimit: 75 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
