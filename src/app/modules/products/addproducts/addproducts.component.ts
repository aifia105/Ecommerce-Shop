import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { shopActions } from 'src/app/components/shop-list/store/actions';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.scss'],
})
export class AddproductsComponent {
  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    image: ['', Validators.required],
    category: ['', Validators.required],
    brand: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private store: Store) {}

  onSubmit() {
    if (this.form.valid) {
      console.log('form', this.form.getRawValue());
      const request: any = this.form.getRawValue();
      this.store.dispatch(shopActions.addProduct({ request }));
    } else {
      this.store.dispatch(
        shopActions.addProductFailure({ erros: { error: 'form is not valid' } })
      );
    }
  }
}
