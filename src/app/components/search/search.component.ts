import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/products.service';
import { cartActions } from '../cart/store/actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnDestroy {
  private subscription$ = new Subscription();
  categoryName: string ='';
  productName: string = '';
  message: string = '';
  results: Product[] = [];
  constructor(private productService: ProductService, private route: ActivatedRoute, private store: Store, private sncakBar: MatSnackBar) {}
  ngOnInit(): void {
    this.categoryName = this.route.snapshot.params['nameCategory'];
    this.productName = this.route.snapshot.params['productName'];
    if(this.categoryName){
      this.subscription$.add(
        this.productService.getAllProductsByCategory(this.categoryName).pipe().subscribe((data) => {
          this.results = data;
        })
      );
    } else if(this.productName){
      this.subscription$.add(
        this.productService.getProductByName(this.productName).pipe().subscribe((data) => {
          this.results = data;
        })
      );
    } else {
      this.message = 'no Items  !';
    }
  }
  addToCart(productDto: Product) {
    this.store.dispatch(cartActions.addToCart({ cartProduct: { productDto, quantity: 1, total: productDto.priceTTC  }}));
    this.sncakBar.open('Product has been added to the cart', 'Close', {
      duration: 3000,
    });
  }
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  } 

}
