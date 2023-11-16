import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.scss']
})
export class ProductslistComponent implements OnDestroy {
  private unsubscribe$ = new Subscription();
  product : Product[] = []; 
  constructor(private store: Store) {}
  ngOnInit() {
    //this.store.dispatch();
    //this.store.select().pipe().subscribe((products: Product[] | null) => {
      // if(products !== null) {
        //this.product = products;
        //}
        //}):        
}
    

  
  ngOnDestroy(): void {
    this.unsubscribe$.unsubscribe();
  }


}
