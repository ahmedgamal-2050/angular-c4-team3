import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellingComponent } from './best-selling.component';

describe('BestSellingComponent', () => {
  let component: BestSellingComponent;
  let fixture: ComponentFixture<BestSellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSellingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSellingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
