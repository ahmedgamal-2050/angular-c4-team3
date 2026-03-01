import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialGiftCarouselComponent } from './special-gift-carousel.component';

describe('SpecialGiftCarouselComponent', () => {
  let component: SpecialGiftCarouselComponent;
  let fixture: ComponentFixture<SpecialGiftCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialGiftCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialGiftCarouselComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
