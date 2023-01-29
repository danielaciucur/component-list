import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MedicalComponentPickerComponent } from './medical-component-list/medical-component-list.component';
import { MedicalComponentDetailsComponent } from './medical-component-detail/medical-component-detail.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MedicalComponentsRoutingModule } from './medical-components-routing.module';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MedicalComponentsService } from 'src/app/medical-components.service';

@NgModule({
  declarations: [
    MedicalComponentPickerComponent,
    MedicalComponentDetailsComponent,
  ],
  providers:[MedicalComponentsService],
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MedicalComponentsRoutingModule, RouterModule, MatCheckboxModule],
  exports: [MedicalComponentPickerComponent, MedicalComponentDetailsComponent],
})
export class MedicalComponentsModule {}
