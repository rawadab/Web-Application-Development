import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightedCrunchComponent } from './weighted-crunch.component';

describe('WeightedCrunchComponent', () => {
  let component: WeightedCrunchComponent;
  let fixture: ComponentFixture<WeightedCrunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeightedCrunchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeightedCrunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
