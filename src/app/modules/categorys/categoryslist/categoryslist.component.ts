import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Category } from 'src/app/models/category';
import { categoryActions } from '../stroe/actions';
import { selectCategorys } from '../stroe/reducers';
import { Subscription, takeUntil } from 'rxjs';
import { shopActions } from 'src/app/components/shop-list/store/actions';

@Component({
  selector: 'app-categoryslist',
  templateUrl: './categoryslist.component.html',
  styleUrls: ['./categoryslist.component.scss']
})
export class CategoryslistComponent implements OnDestroy {
  private unsubscribe$ = new Subscription();
  categorys: Category[] = [];
  constructor(private store: Store) {}
  ngOnInit() {
    this.store.dispatch(shopActions.getCategory());
    this.store.select(selectCategorys).pipe().subscribe((categories: Category[] | null) => {
      if (categories !== null) {
        this.categorys = categories;
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.unsubscribe();
  }
}

