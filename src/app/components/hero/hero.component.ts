import { Component, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Category } from 'src/app/models/category';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { HeroService } from 'src/app/services/hero.service';
import { Store } from '@ngrx/store';
import { cartActions } from '../cart/store/actions';
import { wishlistActions } from '../wishlist/store/actions';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
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
  popularProducts: Product[] = [];
  newProducts: Product[] = [];
  constructor(
    private categoryService: CategoryService,
    private heroService: HeroService,
    private store: Store,
    private sncakBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.categoryService
      .getAllCategorys()
      .pipe()
      .subscribe((data) => {
        this.category = data;
        console.log(this.category);
      });
    this.heroService
      .getPopularProducts()
      .pipe()
      .subscribe((data) => {
        this.popularProducts = data;
        console.log(this.popularProducts);
      });
    this.heroService
      .getNewProducts()
      .pipe()
      .subscribe((data) => {
        this.newProducts = data;
        console.log(this.newProducts);
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
