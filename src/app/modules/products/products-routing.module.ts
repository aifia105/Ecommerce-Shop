import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'Addproducts',
        loadChildren: () =>
          import('./addproducts/addproducts.module').then(
            (m) => m.AddproductsModule
          ),
      },
      {
        path: 'Productslist',
        loadChildren: () =>
          import('./productslist/productslist.module').then(
            (m) => m.ProductslistModule
          ),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
