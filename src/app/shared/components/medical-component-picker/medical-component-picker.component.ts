import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MedicalComponent } from 'src/assets/mock-data/medical-components-mock-data';

@Component({
  selector: 'app-medical-component-picker',
  templateUrl: './medical-component-picker.component.html',
  styleUrls: ['./medical-component-picker.component.scss']
})
export class MedicalComponentPickerComponent {

  private _medicalComponentList: any;

  @Input() set medicalComponentList(_medicalComponentList) {
    this._medicalComponentList = _medicalComponentList;
  }
  get medicalComponentList() {
    return this._medicalComponentList;
  }

 // public selectedComponent = new FormControl<MedicalComponent[]>([]);
 public selectedComponent = new FormControl<MedicalComponent[]>([]);

 public filteredComponent = new FormControl<string>('');
 public filteredComponents = new ReplaySubject<MedicalComponent[]>(1);
 //public medicalComponents = new Observable<MedicalComponent[]>();

 /** 
  * Subject that emits when the component has been destroyed.  
  */
 protected _onDestroy = new Subject<void>();

 constructor() { }

 ngOnInit() {

   // load the initial bank list
   this.filteredComponents.next(this._medicalComponentList.slice());

   // listen for search field value changes
   this.filteredComponent.valueChanges
     .pipe(takeUntil(this._onDestroy))
     .subscribe(() => {
       this.filterBanksMulti();
     });
 }

 ngOnDestroy() {
   this._onDestroy.next();
   this._onDestroy.complete();
 }

 protected filterBanksMulti() {
   if (!this.filteredComponents) {
     return;
   }
   // get the search keyword
   let search = this.filteredComponent.value;
   if (!search) {
     this.filteredComponents.next(this._medicalComponentList.slice());
     return;
   } else {
     search = search.toLowerCase();
     this.filteredComponents.next(
      this._medicalComponentList.filter((medicalComponent: MedicalComponent) => medicalComponent.name.toLowerCase().indexOf(search!) > -1 || medicalComponent.code.indexOf(search!) > -1)
    );
   }
   // filter the banks
   
 }
}
