import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePhonenumberComponent } from './change-phonenumber.component';

describe('ChangePhonenumberComponent', () => {
  let component: ChangePhonenumberComponent;
  let fixture: ComponentFixture<ChangePhonenumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangePhonenumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangePhonenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
