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
    ],
  },
  {
    path: 'product-detail',
    data: { breadcrumb: 'ProductDetail' },
    component: ProductDetailComponent,
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
    path: 'search',
    data: { breadcrumb: 'Search' },
    component: SearchComponent,
  },
  {
    path: '**',
    data: { breadcrumb: 'NotFound' },
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
