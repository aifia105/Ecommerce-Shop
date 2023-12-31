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
import { ProfileInformationComponent } from './components/user/profile-information/profile-information.component';
import { ManageAddressComponent } from './components/user/manage-address/manage-address.component';
import { ChangePasswordComponent } from './components/user/change-password/change-password.component';
import { PaymentComponent } from './components/user/payment/payment.component';
import { ManageCardComponent } from './components/user/manage-card/manage-card.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ChekoutComponent } from './components/chekout/chekout.component';
import { ValidationComponent } from './components/validation/validation.component';
import { OrderHistoryComponent } from './components/user/order-history/order-history.component';

const routes: Routes = [
  { path: '', redirectTo: 'hero', pathMatch: 'full' },
  { path: 'hero', data: { breadcrumb: 'Hero' }, component: HeroComponent },
  { path: 'shop', data: { breadcrumb: 'Shop' }, component: ShopListComponent },
  {
    path: 'user',
    data: { breadcrumb: 'User' },
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'account-management', pathMatch: 'full' },
      { path: 'account-management', component: AccountManagementComponent },
      { path: 'profile-information', component: ProfileInformationComponent },
      { path: 'manage-address', component: ManageAddressComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'manage-card', component: ManageCardComponent },
      { path: 'order-history', component: OrderHistoryComponent}
    ],
  },
  {
    path: 'checkout',
    data: { breadcrumb: 'Checkout' },
    component: ChekoutComponent,
  },
  {
    path: 'product-detail/:id',
    data: { breadcrumb: 'ProductDetail' },
    component: ProductDetailComponent,
  },
  {
    path: 'cart',
    data: { breadcrumb: 'Cart' },
    component: CartComponent,
  },
  {
    path: 'wishlist',
    data: { breadcrumb: 'Wishlist' },
    component: WishlistComponent,
  },
  {
    path: 'about-us',
    data: { breadcrumb: 'AboutUs' },
    component: AboutUsComponent,
  },
  {
    path: 'auth/login',
    data: { breadcrumb: 'Login' },
    component: LoginComponent,
  },
  {
    path: 'auth/register',
    data: { breadcrumb: 'Register' },
    component: RegisterComponent,
  },
  {
    path: 'contact-us',
    data: { breadcrumb: 'ContactUs' },
    component: ContactUsComponent,
  },
  {
    path: 'search/:categoryName',
    data: { breadcrumb: 'Search' },
    component: SearchComponent,
  },
  {
    path: 'validate',
    data: { breadcrumb: 'Search' },
    component: ValidationComponent,
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'categorys',
    loadChildren: () =>
      import('./modules/categorys/categorys.module').then(
        (m) => m.CategorysModule
      ),
  },
  {
    path: '**',
    data: { breadcrumb: 'NotFound' },
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
