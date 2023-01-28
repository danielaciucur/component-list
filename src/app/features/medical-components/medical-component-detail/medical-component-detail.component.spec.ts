import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicalComponentDetailsComponent } from './medical-component-detail.component';

describe('MedicalComponentDetails', () => {
  let component: MedicalComponentDetailsComponent;
  let fixture: ComponentFixture<MedicalComponentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalComponentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalComponentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
