import { Injectable } from '@angular/core';
import { MedicalComponent } from 'src/assets/mock-data/medical-components-mock-data';
import { MEDICAL_COMPONENTS } from 'src/assets/mock-data/medical-components-mock-data';
import { Observable, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicalComponentsService {
  getSelectedComponents(): Observable<MedicalComponent[]> {
    return of(JSON.parse(sessionStorage.getItem('selectedComponents')));
  }

  saveSelectedComponents(components: MedicalComponent[]): void {
    const existingComponents = JSON.parse(
      sessionStorage.getItem('selectedComponents')
    );

    if (existingComponents == null) {
      sessionStorage.setItem('selectedComponents', JSON.stringify(components));
    } else {
      const newComponents = existingComponents.concat(components);
      sessionStorage.setItem(
        'selectedComponents',
        JSON.stringify(newComponents)
      );
    }
  }

  getMedicalComponents(): Observable<MedicalComponent[]> {
    return of(MEDICAL_COMPONENTS);
  }

  getMedicalComponent(id: number | string) {
    return this.getMedicalComponents().pipe(
      map((components: MedicalComponent[]) =>
        components.find((component) => component.id === +id)
      )
    );
  }
}
