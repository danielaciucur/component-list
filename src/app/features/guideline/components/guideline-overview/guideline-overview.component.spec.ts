import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidelineOverviewComponent } from './guideline-overview.component';

describe('GuidelineOverviewComponent', () => {
  let component: GuidelineOverviewComponent;
  let fixture: ComponentFixture<GuidelineOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidelineOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidelineOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
