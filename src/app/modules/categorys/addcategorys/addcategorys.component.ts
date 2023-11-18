import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { shopActions } from 'src/app/components/shop-list/store/actions';

@Component({
  selector: 'app-addcategorys',
  templateUrl: './addcategorys.component.html',
  styleUrls: ['./addcategorys.component.scss'],
})
export class AddcategorysComponent {
  fileHolder: File | null = null;
  form = this.fb.group({
    name: ['', Validators.required],
    image: [null, Validators.required],
  });
  constructor(private fb: FormBuilder, private store: Store) {}
  onSubmit() {
    if (this.form.valid) {
      const request: any = new FormData();
      request.append('name', this.form.get('name')?.value);
      request.append('image', this.fileHolder as File);
      
      //const request: any = this.form.getRawValue();
      this.store.dispatch(shopActions.addCategory({ request }));
    } else {
      this.store.dispatch(
        shopActions.addCategoryFailure({
          erros: { error: 'information invalid !' },
        })
      );
    }
  }

  onFileChange(event: any) {
    if(event.target.files.length > 0){
      this.fileHolder = event.target.files[0];       
    }
  }
}
