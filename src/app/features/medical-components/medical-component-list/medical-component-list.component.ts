import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MedicalComponentsService } from 'src/app/core/services/medical-components.service';
import { MedicalComponent } from 'src/assets/mock-data/medical-components-mock-data';

@Component({
  selector: 'app-medical-component-picker',
  templateUrl: './medical-component-list.component.html',
  styleUrls: ['./medical-component-list.component.scss'],
})
export class MedicalComponentPickerComponent {
  private _medicalComponentList: MedicalComponent[] = [];

  dataSource: MatTableDataSource<MedicalComponent>;

  displayedColumns: string[] = ['id', 'name', 'code'];

  constructor(private medicalComponentsService: MedicalComponentsService) {
    this.medicalComponentsService
      .getMedicalComponents()
      .subscribe((value) => (this._medicalComponentList = value));

    this.dataSource = new MatTableDataSource<MedicalComponent>(
      this._medicalComponentList
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
