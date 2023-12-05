import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { shopActions } from 'src/app/components/shop-list/store/actions';
import { selectProducts } from 'src/app/components/shop-list/store/reducers';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.scss'],
})
export class ProductslistComponent implements OnDestroy {
  private unsubscribe$ = new Subscription();
  products: Product[] = [];
  constructor(private store: Store) {}
  ngOnInit() {
    this.store.dispatch(shopActions.getProducts());
    this.store
      .select(selectProducts)
      .pipe()
      .subscribe(async (product: Product[] | null) => {
        if (product !== null) {
          this.products = product.map((product) => {
            if (product.image) {
              return {
                ...product,
                image: 'data:image/jpeg;base64,' + product.image,
              };
            }
            return product;
          });
          console.log(this.products);
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.unsubscribe();
  }
}
