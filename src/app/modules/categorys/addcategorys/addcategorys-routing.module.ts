import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcategorysComponent } from './addcategorys.component';

const routes: Routes = [{ path: '', component: AddcategorysComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddcategorysRoutingModule { }
