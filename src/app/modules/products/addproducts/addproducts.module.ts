import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddproductsRoutingModule } from './addproducts-routing.module';
import { AddproductsComponent } from './addproducts.component';


@NgModule({
  declarations: [
    AddproductsComponent
  ],
  imports: [
    CommonModule,
    AddproductsRoutingModule
  ]
})
export class AddproductsModule { }
