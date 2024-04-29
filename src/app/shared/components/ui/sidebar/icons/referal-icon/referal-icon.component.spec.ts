import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferalIconComponent } from './referal-icon.component';

describe('ReferalIconComponent', () => {
  let component: ReferalIconComponent;
  let fixture: ComponentFixture<ReferalIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReferalIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferalIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
