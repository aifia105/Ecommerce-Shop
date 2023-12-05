import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { shopActions } from '../shop-list/store/actions';
import { selectCategorys } from '../shop-list/store/reducers';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {
  private subcription$ = new Subscription();
  categories: Category[] = [];
  user = JSON.parse(localStorage.getItem('user') || '{}');
  constructor(private store: Store){}
  ngOnInit(): void {
    this.store.dispatch(shopActions.getCategory());
    this.store
      .select(selectCategorys)
      .pipe()
      .subscribe(async (categories: Category[] | null) => {
        if (categories !== null) {
          this.categories = categories.map((category) => {
            if (category.image) {
              return {
                ...category,
                image: 'data:image/jpeg;base64,' + category.image,
              };
            }
            return category;
          });
          console.log(this.categories);
        }
      });
  }

  ngOnDestroy(): void {
    this.subcription$.unsubscribe();
  }
}
