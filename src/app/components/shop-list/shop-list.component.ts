import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { shopActions } from './store/actions';
import { cartActions } from '../cart/store/actions';
import { wishlistActions } from '../wishlist/store/actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { selectProducts } from './store/reducers';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],
})
export class ShopListComponent implements OnInit {
  grid: boolean = true;
  isSelected: boolean = true;
  products: Product[] = [];

  categories: Category[] = [
    { nameCategory: 'Apparel and accessories' },
    { nameCategory: 'Consumer electronics' },
    { nameCategory: 'Books, movies and music ' },
    { nameCategory: 'Clothing and Shoes' },
    { nameCategory: 'Personal care and beauty' },
    { nameCategory: 'Furniture and decor' },
  ];
  constructor(private store: Store, private sncakBar: MatSnackBar) {}
  ngOnInit(): void {
    this.store.dispatch(shopActions.getCategory());
    this.store.dispatch(shopActions.getProducts());
    this.store.select(selectProducts).pipe().subscribe((data) => {
      if (data !== null) {
        this.products = data;
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
