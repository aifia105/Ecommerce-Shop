import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryslistComponent } from './categoryslist.component';

describe('CategoryslistComponent', () => {
  let component: CategoryslistComponent;
  let fixture: ComponentFixture<CategoryslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryslistComponent]
    });
    fixture = TestBed.createComponent(CategoryslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
