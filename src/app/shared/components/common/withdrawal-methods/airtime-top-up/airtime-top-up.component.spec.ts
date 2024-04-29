import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirtimeTopUpComponent } from './airtime-top-up.component';

describe('AirtimeTopUpComponent', () => {
  let component: AirtimeTopUpComponent;
  let fixture: ComponentFixture<AirtimeTopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AirtimeTopUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirtimeTopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
