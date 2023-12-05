import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { shopActions } from 'src/app/components/shop-list/store/actions';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

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
    price: [0 , Validators.required],
    pricture: [ ''  , Validators.required],
    category: ['', Validators.required],
    brand: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private store: Store, private categoryService: CategoryService) {}

  onSubmit() {
    if (this.form.valid && this.fileHolder) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(this.fileHolder);
      reader.onload = (event) => {
        const fileContent = event.target?.result as ArrayBuffer;
        const byteArray = new Uint8Array(fileContent);
        const categoryName = this.form.get('category')?.value || '';
        this.categoryService.getCategoryByName(categoryName).subscribe(category => {
          const request = {
            name: this.form.get('name')?.value || '',
            description: this.form.get('description')?.value || '',
            priceTTC: this.form.get('price')?.value || 0,
            image: Array.from(byteArray),
            category: category,
            brand: this.form.get('brand')?.value || '',
            CreationDate : new Date(),
            rating: 5,
          }
          this.store.dispatch(shopActions.addProduct({ request }));
        });
      };
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
