import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportIconComponent } from './support-icon.component';

describe('SupportIconComponent', () => {
  let component: SupportIconComponent;
  let fixture: ComponentFixture<SupportIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupportIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
