import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectItems } from '../cart/store/reducers';
import { selectItems as itemsWishlist }  from '../wishlist/store/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  user = JSON.parse(localStorage.getItem('user') || '{}');
  itemsNumberCart = 0;
  itemsNumberWishlist = 0;
  constructor(private route: Router, private storeCart: Store, private StoreWishlist: Store){}
  ngOnInit(): void {
   this.storeCart.select(selectItems).subscribe( (data) => {
     this.itemsNumberCart = data.length;
   });
   this.StoreWishlist.select(itemsWishlist).subscribe( (data) => {
    this.itemsNumberWishlist = data.length;
   })
  }


  search(input: HTMLInputElement){
    this.route.navigate(['/search', input.value]);
    input.value= '';
  }

}
