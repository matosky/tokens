import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashIconComponent } from './dash-icon.component';

describe('DashIconComponent', () => {
  let component: DashIconComponent;
  let fixture: ComponentFixture<DashIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
