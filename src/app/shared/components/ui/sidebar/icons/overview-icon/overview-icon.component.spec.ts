import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewIconComponent } from './overview-icon.component';

describe('OverviewIconComponent', () => {
  let component: OverviewIconComponent;
  let fixture: ComponentFixture<OverviewIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverviewIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverviewIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
