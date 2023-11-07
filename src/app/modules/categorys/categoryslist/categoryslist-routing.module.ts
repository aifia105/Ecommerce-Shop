import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryslistComponent } from './categoryslist.component';

const routes: Routes = [{ path: '', component: CategoryslistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryslistRoutingModule { }
