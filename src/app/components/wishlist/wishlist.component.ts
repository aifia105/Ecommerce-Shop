import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/products.service';
import { selectItems } from './store/reducers';
import { wishlistActions } from './store/actions';
import { cartActions } from '../cart/store/actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  availability: boolean = true;
  products: Product[] = [];

  constructor(private store: Store, private productService: ProductService, private sncakBar: MatSnackBar) {}
  ngOnInit(): void {
    this.store.select(selectItems).subscribe((data) => {
      this.products = data;
      console.log(this.products);
      data.forEach((product) => {
        if (product.id) { 
           this.productService
            .getProduct(product.id)
            .subscribe((data) => {
              if (!data) {
                this.availability = false;
              }
            });
        }
      });
    });
  }
  removeFromWishlist(productId: string | undefined) {
    if(productId) {
      this.store.dispatch(wishlistActions.removeFromWishlist({ productId }));
    }
  }
  clearWishList() {
    this.store.dispatch(wishlistActions.clearWishlist());
  }

  addToCart(productDto: Product) {
    this.store.dispatch(cartActions.addToCart({ cartProduct: { productDto, quantity: 1, total: productDto.priceTTC * 1  }}));
    this.sncakBar.open('Product has been added to the cart', 'Close', {
      duration: 3000,
    });
  }

}
