import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashtokenIconComponent } from './cashtoken-icon.component';

describe('CashtokenIconComponent', () => {
  let component: CashtokenIconComponent;
  let fixture: ComponentFixture<CashtokenIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CashtokenIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CashtokenIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
