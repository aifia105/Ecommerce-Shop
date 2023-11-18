import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnDestroy {
  private unsubscribe$ = new Subscription();
  quantity : number = 0;
  @Input() id : number = 0;
  currentProduct !: Product ;
  relatedProducts : Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
      this.productService.getProduct(this.id).pipe().subscribe((data) => {
        this.currentProduct = data;
      });
      this.productService.getAllProductsByCategory(this.currentProduct?.category.nameCategory).pipe().subscribe((data) => {
        this.relatedProducts = data;
      })
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
  products : Product[] = [
    {name : "iphone 7" ,
    description :"some text",
    priceHt : 1000,
    tva : 1000,
    priceTTC : 2000,
    pricture : "assets/book.jpeg",
    category : {nameCategory :"Consumer electronics"} ,
    avg_rating : 4 ,
    CreationDate : "12/6/2000",
    brand : "apple"
    },
    {name : "iphone 7" ,
    description :"some text",
    priceHt : 1000,
    tva : 1000,
    priceTTC : 2000,
    pricture : "assets/book.jpeg",
    category : {nameCategory :"Consumer electronics"} ,
    avg_rating : 4 ,
    CreationDate : "12/6/2000",
    brand : "apple"
    },
    {name : "iphone 7" ,
    description :"some text",
    priceHt : 1000,
    tva : 1000,
    priceTTC : 2000,
    pricture : "assets/book.jpeg",
    category : {nameCategory :"Consumer electronics"} ,
    avg_rating : 4 ,
    CreationDate : "12/6/2000",
    brand : "apple"
    },
    {name : "iphone 7" ,
    description :"some text",
    priceHt : 1000,
    tva : 1000,
    priceTTC : 2000,
    pricture : "assets/book.jpeg",
    category : {nameCategory :"Consumer electronics"} ,
    avg_rating : 4 ,
    CreationDate : "12/6/2000",
    brand : "apple"
    }];

}
