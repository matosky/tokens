import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewEntComponent } from './overview.component';

describe('OverviewComponent', () => {
  let component: OverviewEntComponent;
  let fixture: ComponentFixture<OverviewEntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverviewEntComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverviewEntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
