import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialGiftContentComponent } from './special-gift-content.component';

describe('SpecialGiftContentComponent', () => {
  let component: SpecialGiftContentComponent;
  let fixture: ComponentFixture<SpecialGiftContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialGiftContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialGiftContentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
