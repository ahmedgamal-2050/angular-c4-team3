import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedDesign } from './shared-design';

describe('SharedDesign', () => {
  let component: SharedDesign;
  let fixture: ComponentFixture<SharedDesign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedDesign],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedDesign);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
