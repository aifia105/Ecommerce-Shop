import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/products.service';
import { selectItems } from './store/reducers';
import { wishlistActions } from './store/actions';
import { cartActions } from '../cart/store/actions';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  availability: boolean = true;
  products: Product[] = [];

  constructor(private store: Store, private productService: ProductService) {}
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

  addToCart(product: Product) {
    this.store.dispatch(cartActions.addToCart({ cartProduct: { product, quantity: 1, total: product.priceTTC * 1  }}));
  }

}
