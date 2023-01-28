import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalComponentDetailsComponent } from './medical-component-detail/medical-component-detail.component';
import { MedicalComponentPickerComponent } from './medical-component-list/medical-component-list.component';

const medicalComponentRoutes: Routes = [
    {
      path: '',
      component: MedicalComponentPickerComponent,
      children: [
        {
          path: ':id',
          component: MedicalComponentDetailsComponent,
        }
      ]
    }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(medicalComponentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MedicalComponentsRoutingModule { }