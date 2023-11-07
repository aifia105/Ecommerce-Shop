import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'Addcategorys',
        loadChildren: () =>
          import('./addcategorys/addcategorys.module').then(
            (m) => m.AddcategorysModule
          ),
      },
      {
        path: 'categoryslist',
        loadChildren: () =>
          import('./categoryslist/categoryslist.module').then(
            (m) => m.CategoryslistModule
          ),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class CategorysRoutingModule {}
