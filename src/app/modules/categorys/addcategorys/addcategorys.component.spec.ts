import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcategorysComponent } from './addcategorys.component';

describe('AddcategorysComponent', () => {
  let component: AddcategorysComponent;
  let fixture: ComponentFixture<AddcategorysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcategorysComponent]
    });
    fixture = TestBed.createComponent(AddcategorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
