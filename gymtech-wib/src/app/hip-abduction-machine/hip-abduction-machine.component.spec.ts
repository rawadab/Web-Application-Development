import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipAbductionMachineComponent } from './hip-abduction-machine.component';

describe('HipAbductionMachineComponent', () => {
  let component: HipAbductionMachineComponent;
  let fixture: ComponentFixture<HipAbductionMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HipAbductionMachineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HipAbductionMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
