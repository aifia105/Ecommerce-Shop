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
  fileHolder: File | null = null;
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
      const request: any = new FormData();
      request.append('name', this.form.get('name')?.value);
      request.append('description', this.form.get('description')?.value);
      request.append('price', this.form.get('price')?.value);
      request.append('image', this.fileHolder as File);
      request.append('category', this.form.get('category')?.value);
      request.append('brand', this.form.get('brand')?.value);


     // const request: any = this.form.getRawValue();
      this.store.dispatch(shopActions.addProduct({ request }));
    } else {
      this.store.dispatch(
        shopActions.addProductFailure({ erros: { error: 'form is not valid' } })
      );
    }
  }

  onFileChange(event: any) {
    if(event.target.files.length > 0){
      this.fileHolder = event.target.files[0];
    }
  }
}
