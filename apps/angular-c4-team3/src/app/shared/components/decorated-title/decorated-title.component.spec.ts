import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratedTitleComponent } from './decorated-title.component';

describe('DecoratedTitleComponent', () => {
  let component: DecoratedTitleComponent;
  let fixture: ComponentFixture<DecoratedTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecoratedTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecoratedTitleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
