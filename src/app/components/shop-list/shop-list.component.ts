import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { shopActions } from './store/actions';
import { cartActions } from '../cart/store/actions';
import { wishlistActions } from '../wishlist/store/actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { selectCategorys, selectProducts } from './store/reducers';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],
})
export class ShopListComponent implements OnInit {
  grid: boolean = true;
  isSelected: boolean = true;
  products: Product[] = [];

  categories: Category[] = [];
  constructor(private store: Store, private sncakBar: MatSnackBar) {}
  ngOnInit(): void {
    this.store.dispatch(shopActions.getCategory());
    this.store
      .select(selectCategorys)
      .pipe()
      .subscribe(async (categories: Category[] | null) => {
        if (categories !== null) {
          this.categories = categories.map((category) => {
            if (category.image) {
              return {
                ...category,
                image: 'data:image/jpeg;base64,' + category.image,
              };
            }
            return category;
          });
          console.log(this.categories);
        }
      });
    this.store.dispatch(shopActions.getProducts());
    this.store.select(selectProducts).pipe().subscribe(async (product: Product[] | null) => {
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
    })
  }

  addToCart(productDto: Product) {
    this.store.dispatch(cartActions.addToCart({ cartProduct: { productDto, quantity: 1, total: productDto.priceTTC  }}));
    this.sncakBar.open('Product has been added to the cart', 'Close', {
      duration: 3000,
    });
  }
  addToWishList(product: Product) {
    this.store.dispatch(wishlistActions.addToWishlist({ product }));
    this.sncakBar.open('Product has been added to the wishlist', 'Close', {
      duration: 3000,
    });
  }

  changeview(grid: boolean) {
    this.grid = !this.grid;
  }
  swapColors() {
    this.isSelected = !this.isSelected;
  }
}
