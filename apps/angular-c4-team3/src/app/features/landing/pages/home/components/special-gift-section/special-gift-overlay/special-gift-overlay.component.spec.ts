import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialGiftOverlayComponent } from './special-gift-overlay.component';

describe('SpecialGiftOverlayComponent', () => {
  let component: SpecialGiftOverlayComponent;
  let fixture: ComponentFixture<SpecialGiftOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialGiftOverlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialGiftOverlayComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
