import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyingFloorLegRaiseComponent } from './lying-floor-leg-raise.component';

describe('LyingFloorLegRaiseComponent', () => {
  let component: LyingFloorLegRaiseComponent;
  let fixture: ComponentFixture<LyingFloorLegRaiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LyingFloorLegRaiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LyingFloorLegRaiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
