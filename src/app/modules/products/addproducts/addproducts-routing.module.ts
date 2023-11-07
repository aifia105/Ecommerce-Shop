import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductsComponent } from './addproducts.component';

const routes: Routes = [{ path: '', component: AddproductsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddproductsRoutingModule { }
