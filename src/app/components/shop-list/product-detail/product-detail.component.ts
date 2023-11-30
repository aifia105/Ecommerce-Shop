import { Component, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/products.service';
import { cartActions } from '../../cart/store/actions';
import { Store } from '@ngrx/store';
import { wishlistActions } from '../../wishlist/store/actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnDestroy {
  private unsubscribe$ = new Subscription();
  quantity : number = 1;
  id : string = '';
  currentProduct !: Product ;
  relatedProducts : Product[] = [];

  constructor(private productService: ProductService, private route: ActivatedRoute, private store: Store, private sncakBar: MatSnackBar) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
      this.productService.getProduct(this.id).pipe().subscribe((data) => {
        this.currentProduct = data;
        console.log(this.currentProduct);
      });
      this.productService.getAllProductsByCategory(this.currentProduct?.category.id).pipe().subscribe((data) => {
        this.relatedProducts = data;
        console.log(this.relatedProducts);
      });
  }
  addToCart(product: Product) {
    this.store.dispatch(cartActions.addToCart({ cartProduct: { product, quantity: this.quantity, total: product.priceTTC * this.quantity  }}));
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

  ngOnDestroy() {
    this.unsubscribe$.unsubscribe();
  }
  quantityPlus(){
  this.quantity++;
  }
  quantityMinus(){
  this.quantity--;
  }

}
