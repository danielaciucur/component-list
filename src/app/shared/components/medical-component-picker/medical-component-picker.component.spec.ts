import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalComponentPickerComponent } from './medical-component-picker.component';

describe('MedicalComponentPickerComponent', () => {
  let component: MedicalComponentPickerComponent;
  let fixture: ComponentFixture<MedicalComponentPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalComponentPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalComponentPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
