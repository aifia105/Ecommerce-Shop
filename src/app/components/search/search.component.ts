import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/products.service';

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
  constructor(private productService: ProductService, private route: ActivatedRoute) {}
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
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  } 

}
