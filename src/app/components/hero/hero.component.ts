import { Component, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Category } from 'src/app/models/category';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { HeroService } from 'src/app/services/hero.service';
import { Store } from '@ngrx/store';
import { cartActions } from '../cart/store/actions';
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
    private store: Store
  ) {}
  ngOnInit(): void {
    this.categoryService
      .getAllCategorys()
      .pipe()
      .subscribe((data) => {
        this.category = data;
      });
    this.heroService
      .getPopularProducts()
      .pipe()
      .subscribe((data) => {
        this.popularProducts = data;
      });
    this.heroService
      .getNewProducts()
      .pipe()
      .subscribe((data) => {
        this.newProducts = data;
      });
  setInterval(() => {
      this.changeImage();
    }, 6000);
  }
  addToCart(product: Product) {
    this.store.dispatch(cartActions.addToCart({ cartProduct: { product, quantity: 1, total: product.priceTTC  }}));
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







  products: Product[] = [
    {
      name: 'iphone 7',
      description: 'some text',
      priceHt: 1000,
      tva: 1000,
      priceTTC: 2000,
      pricture: 'assets/book.jpeg',
      category: { nameCategory: 'Consumer electronics' },
      avg_rating: 4,
      CreationDate: '12/6/2000',
      brand: 'apple',
    },
    {
      name: 'iphone 7',
      description: 'some text',
      priceHt: 1000,
      tva: 1000,
      priceTTC: 2000,
      pricture: 'assets/book.jpeg',
      category: { nameCategory: 'Consumer electronics' },
      avg_rating: 4,
      CreationDate: '12/6/2000',
      brand: 'apple',
    },
    {
      name: 'iphone 7',
      description: 'some text',
      priceHt: 1000,
      tva: 1000,
      priceTTC: 2000,
      pricture: 'assets/book.jpeg',
      category: { nameCategory: 'Consumer electronics' },
      avg_rating: 4,
      CreationDate: '12/6/2000',
      brand: 'apple',
    },
    {
      name: 'iphone 7',
      description: 'some text',
      priceHt: 1000,
      tva: 1000,
      priceTTC: 2000,
      pricture: 'assets/book.jpeg',
      category: { nameCategory: 'Consumer electronics' },
      avg_rating: 4,
      CreationDate: '12/6/2000',
      brand: 'apple',
    },
    {
      name: 'iphone 7',
      description: 'some text',
      priceHt: 1000,
      tva: 1000,
      priceTTC: 2000,
      pricture: 'assets/book.jpeg',
      category: { nameCategory: 'Consumer electronics' },
      avg_rating: 4,
      CreationDate: '12/6/2000',
      brand: 'apple',
    },
    {
      name: 'iphone 7',
      description: 'some text',
      priceHt: 1000,
      tva: 1000,
      priceTTC: 2000,
      pricture: 'assets/book.jpeg',
      category: { nameCategory: 'Consumer electronics' },
      avg_rating: 4,
      CreationDate: '12/6/2000',
      brand: 'apple',
    },
    {
      name: 'iphone 7',
      description: 'some text',
      priceHt: 1000,
      tva: 1000,
      priceTTC: 2000,
      pricture: 'assets/book.jpeg',
      category: { nameCategory: 'Consumer electronics' },
      avg_rating: 4,
      CreationDate: '12/6/2000',
      brand: 'apple',
    },
  ];
  categorys: Category[] = [
    {
      nameCategory: 'Apparel and accessories',
      image: 'assets/accessories.jpg',
    },
    {
      nameCategory: 'Consumer electronics',
      image: 'assets/electronic.jpg',
    },
    {
      nameCategory: 'Books, movies and music',
      image: 'assets/book.jpeg',
    },
    {
      nameCategory: 'Clothing and Shoes',
      image: 'assets/fast-fashion.jpeg',
    },
    {
      nameCategory: 'Personal care and beauty',
      image: 'assets/main-qimg.jfif',
    },
    {
      nameCategory: 'Furniture and decor',
      image: 'assets/Furniture.jpg',
    },
  ];
}
