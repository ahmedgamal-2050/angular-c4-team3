import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRelatedComponent } from './product-related.component';

describe('ProductRelatedComponent', () => {
  let component: ProductRelatedComponent;
  let fixture: ComponentFixture<ProductRelatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductRelatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRelatedComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
