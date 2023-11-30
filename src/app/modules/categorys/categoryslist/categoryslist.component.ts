import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Category } from 'src/app/models/category';
import { Subscription} from 'rxjs';
import { shopActions } from 'src/app/components/shop-list/store/actions';
import { selectCategorys } from 'src/app/components/shop-list/store/reducers';

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
        console.log(this.categorys);
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.unsubscribe();
  }
}

