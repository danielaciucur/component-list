import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedicalComponentPickerComponent } from './components/medical-component-picker/medical-component-picker.component';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [MedicalComponentPickerComponent],
  imports: [
    CommonModule,
    NgxMatSelectSearchModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    BrowserAnimationsModule
  ],
  exports: [
    MedicalComponentPickerComponent, 
    CommonModule,
    NgxMatSelectSearchModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule
  ]
})
export class SharedModule { }
