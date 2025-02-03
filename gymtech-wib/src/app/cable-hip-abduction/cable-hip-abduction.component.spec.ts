import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CableHipAbductionComponent } from './cable-hip-abduction.component';

describe('CableHipAbductionComponent', () => {
  let component: CableHipAbductionComponent;
  let fixture: ComponentFixture<CableHipAbductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CableHipAbductionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CableHipAbductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
