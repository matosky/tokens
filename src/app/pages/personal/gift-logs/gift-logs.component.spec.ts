import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftsLogComponent } from './gift-logs.component';

describe('GiftLogsComponent', () => {
  let component: GiftsLogComponent;
  let fixture: ComponentFixture<GiftsLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GiftsLogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GiftsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
