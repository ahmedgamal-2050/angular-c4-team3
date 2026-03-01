import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialGiftSectionComponent } from './special-gift-section.component';

describe('SpecialGiftSectionComponent', () => {
  let component: SpecialGiftSectionComponent;
  let fixture: ComponentFixture<SpecialGiftSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialGiftSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialGiftSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
