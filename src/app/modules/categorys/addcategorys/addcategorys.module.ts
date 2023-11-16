import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddcategorysRoutingModule } from './addcategorys-routing.module';
import { AddcategorysComponent } from './addcategorys.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddcategorysComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddcategorysRoutingModule
  ]
})
export class AddcategorysModule { }
