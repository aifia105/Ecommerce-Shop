import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryslistRoutingModule } from './categoryslist-routing.module';
import { CategoryslistComponent } from './categoryslist.component';


@NgModule({
  declarations: [
    CategoryslistComponent
  ],
  imports: [
    CommonModule,
    CategoryslistRoutingModule
  ]
})
export class CategoryslistModule { }
