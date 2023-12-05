import { Component, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Category } from 'src/app/models/category';
import { Subscription, map } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { HeroService } from 'src/app/services/hero.service';
import { Store } from '@ngrx/store';
import { cartActions } from '../cart/store/actions';
import { wishlistActions } from '../wishlist/store/actions';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { shopActions } from '../shop-list/store/actions';
import { selectCategorys, selectProducts } from '../shop-list/store/reducers';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnDestroy {
  imagesUrl: string[] = [
    'assets/home-page.jpg',
    'assets/shoe.jpg',
    'assets/pexels.jpg',
    'assets/Furniture.jpg'
  ];
  imageIndex = 0;
  currentImage = this.imagesUrl[0];
  private subcription$ = new Subscription();
  category: Category[] = [];
  products: Product[] = [];
  popularProducts: Product[] = [];
  newProducts: Product[] = [];
  constructor(
    private store: Store,
    private sncakBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.store.dispatch(shopActions.getCategory());
    this.store
      .select(selectCategorys)
      .pipe()
      .subscribe(async (categories: Category[] | null) => {
        if (categories !== null) {
          this.category = categories.map((category) => {
            if (category.image) {
              return {
                ...category,
                image: 'data:image/jpeg;base64,' + category.image,
              };
            }
            return category;
          });
          console.log(this.category);
        }
      });
      this.store.dispatch(shopActions.getProducts());
    this.store
      .select(selectProducts)
      .pipe()
      .subscribe(async (product: Product[] | null) => {
        if (product !== null) {
          this.popularProducts = product.map((product) => {
            if (product.image) {
              return {
                ...product,
                image: 'data:image/jpeg;base64,' + product.image,
              };
            }
            return product;
          });
          this.popularProducts.sort((a, b) => b.rating - a.rating);
          console.log(this.products);
          
        }
      });
     
      this.store.dispatch(shopActions.getProducts());
    this.store
      .select(selectProducts)
      .pipe()
      .subscribe(async (product: Product[] | null) => {
        if (product !== null) {
          this.newProducts = product.map((product) => {
            if (product.image) {
              return {
                ...product,
                image: 'data:image/jpeg;base64,' + product.image,
              };
            }
            return product;
          });
          this.newProducts.sort((a, b) => new Date(b.CreationDate).getTime() - new Date(a.CreationDate).getTime());
          console.log(this.products);
        }
      });
    
  setInterval(() => {
      this.changeImage();
    }, 6000);
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
  changeImage() {
    if(this.imageIndex === this.imagesUrl.length - 1){
      this.imageIndex = 0;
    } else {
      this.imageIndex++;
    }
    this.currentImage = this.imagesUrl[this.imageIndex];
  }

  ngOnDestroy(): void {
    this.subcription$.unsubscribe();
  }
}
