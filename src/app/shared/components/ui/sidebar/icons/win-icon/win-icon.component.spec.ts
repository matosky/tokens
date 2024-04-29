import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinIconComponent } from './win-icon.component';

describe('WinIconComponent', () => {
  let component: WinIconComponent;
  let fixture: ComponentFixture<WinIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WinIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WinIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
