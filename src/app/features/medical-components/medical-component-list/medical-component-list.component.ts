import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MedicalComponentsService } from 'src/app/medical-components.service';
import { MedicalComponent } from 'src/assets/mock-data/medical-components-mock-data';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-medical-component-picker',
  templateUrl: './medical-component-list.component.html',
  styleUrls: ['./medical-component-list.component.scss']
})
export class MedicalComponentPickerComponent {

  @Input() addComponentsClicked: boolean;
  @Output() backToOverview = new EventEmitter<boolean>();

  private _medicalComponentList: MedicalComponent[] = [];

  dataSource: MatTableDataSource<MedicalComponent>;
  selection = new SelectionModel<MedicalComponent>(true, []);

  displayedColumns: string[] = ['select', 'id', 'name', 'code'];

  constructor(
    private medicalComponentsService: MedicalComponentsService,
    private router: Router
  ) {
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

  onBackToOverviewClick() {
    this.backToOverview.emit(!this.addComponentsClicked);
    this.router.navigate(['/guideline-overview']);
  }

  onAddSelectedClick() {
    console.log(this.selection.selected);
    this.medicalComponentsService.selectComponents(this.selection.selected);
    this.router.navigate(['/guideline-overview']);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: MedicalComponent): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}
