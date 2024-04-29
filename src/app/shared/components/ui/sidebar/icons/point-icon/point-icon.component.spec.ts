import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointIconComponent } from './point-icon.component';

describe('PointIconComponent', () => {
  let component: PointIconComponent;
  let fixture: ComponentFixture<PointIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PointIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PointIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
