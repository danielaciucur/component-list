import { Injectable } from '@angular/core';
import { MedicalComponent } from 'src/assets/mock-data/medical-components-mock-data';
import { MEDICAL_COMPONENTS } from 'src/assets/mock-data/medical-components-mock-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicalComponentsService {

  constructor() { }

  getMedicalComponents(): Observable<MedicalComponent[]> {
    return of(MEDICAL_COMPONENTS);
  }

}