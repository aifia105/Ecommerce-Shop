import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddcategorysRoutingModule } from './addcategorys-routing.module';
import { AddcategorysComponent } from './addcategorys.component';


@NgModule({
  declarations: [
    AddcategorysComponent
  ],
  imports: [
    CommonModule,
    AddcategorysRoutingModule
  ]
})
export class AddcategorysModule { }
