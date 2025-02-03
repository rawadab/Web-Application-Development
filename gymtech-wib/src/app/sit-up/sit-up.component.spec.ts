import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitUpComponent } from './sit-up.component';

describe('SitUpComponent', () => {
  let component: SitUpComponent;
  let fixture: ComponentFixture<SitUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
