import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftIconComponent } from './gift-icon.component';

describe('GiftIconComponent', () => {
  let component: GiftIconComponent;
  let fixture: ComponentFixture<GiftIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GiftIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GiftIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
