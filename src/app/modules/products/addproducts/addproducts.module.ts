import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddproductsRoutingModule } from './addproducts-routing.module';
import { AddproductsComponent } from './addproducts.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddproductsComponent
  ],
  imports: [
    CommonModule,
    AddproductsRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddproductsModule { }
