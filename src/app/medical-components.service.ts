import { Injectable } from '@angular/core';
import { MedicalComponent } from 'src/assets/mock-data/medical-components-mock-data';
import { MEDICAL_COMPONENTS } from 'src/assets/mock-data/medical-components-mock-data';
import { Observable, of, Subject } from 'rxjs';

@Injectable()
export class MedicalComponentsService {

  private selectedMedicalComponents = new Subject<MedicalComponent[]>();

  getSelectedComponents(): Observable<MedicalComponent[]> {
    return this.selectedMedicalComponents.asObservable();
  }

  selectComponents(components: MedicalComponent[]): void {
    this.selectedMedicalComponents.next(components);
  }

  getMedicalComponents(): Observable<MedicalComponent[]> {
    return of(MEDICAL_COMPONENTS);
  }

}