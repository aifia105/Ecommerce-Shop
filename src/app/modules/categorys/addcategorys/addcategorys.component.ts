import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Category } from 'src/app/models/category';
import { categoryActions } from '../stroe/actions';


@Component({
  selector: 'app-addcategorys',
  templateUrl: './addcategorys.component.html',
  styleUrls: ['./addcategorys.component.scss']
})
export class AddcategorysComponent {
  form = this.fb.group({
    name: ['',Validators.required],
    image: ['',Validators.required],
  });
  constructor(private fb:FormBuilder, private store:Store) {}
  onSubmit() {
    if(this.form.valid){
      console.log('form',this.form.getRawValue());
      const request: any = this.form.getRawValue();
      this.store.dispatch(categoryActions.addCategory({request}));
    } else {
      this.store.dispatch(categoryActions.addCategoryFailure({erros: {error: 'information invalid !'}}));
    }
  }

}
