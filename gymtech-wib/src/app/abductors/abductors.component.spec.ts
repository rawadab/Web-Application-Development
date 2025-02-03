import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbductorsComponent } from './abductors.component';

describe('AbductorsComponent', () => {
  let component: AbductorsComponent;
  let fixture: ComponentFixture<AbductorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbductorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbductorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
